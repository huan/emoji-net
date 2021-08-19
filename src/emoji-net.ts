/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import 'isomorphic-fetch'

import * as tfc from '@tensorflow/tfjs-core'
import {
  loadFrozenModel,
  FrozenModel,
}                       from '@tensorflow/tfjs-converter'
import {
  EmojiId,
  EmojiLabel,
  EMOJI_CLASSES,
}                       from './emoji-classes'
import {
  createCanvas,
  loadImage,
  resizeImage,
}                         from './canvas-utils'

type TensorMap = {[name: string]: tfc.Tensor}

const MOBILENET_SIZE = 224

const MODEL_FILE_URL = 'https://emojiscavengerhunt.withgoogle.com/model/tensorflowjs_model.pb'
const WEIGHT_MANIFEST_FILE_URL = 'https://emojiscavengerhunt.withgoogle.com/model/weights_manifest.json'
// const MODEL_FILE_URL = 'file:///model/tensorflowjs_model.pb'
// const WEIGHT_MANIFEST_FILE_URL = 'file:///model/weights_manifest.json'
const INPUT_NODE_NAME = 'input'
const OUTPUT_NODE_NAME = 'final_result'
const PREPROCESS_DIVISOR = tfc.scalar(255 / 2)

class EmojiNet {

  model?: FrozenModel

  async load () {
    this.model = await loadFrozenModel(
      MODEL_FILE_URL,
      WEIGHT_MANIFEST_FILE_URL
    )

    this.model.predict(
      tfc.zeros([
        MOBILENET_SIZE,
        MOBILENET_SIZE,
        3,
      ])
    )
  }

  dispose () {
    if (this.model) {
      this.model.dispose()
    }
  }

  async scan (src: string | Buffer): Promise<EmojiLabel[]> {
    const image         = await loadImage(src)
    const resizedImage  = await resizeImage(image, MOBILENET_SIZE, MOBILENET_SIZE)

    const canvas  = await createCanvas(MOBILENET_SIZE, MOBILENET_SIZE)
    const ctx     = canvas.getContext('2d')
    if (!ctx) { throw new Error('no ctx') }

    ctx.putImageData(resizedImage, 0, 0)
    const pixels = tfc.fromPixels(canvas)

    const result = this.predict(pixels)
    const top3 = this.getTopKClasses(result, 3)

    return top3.map(x => x.label)
  }

  /**
   * Infer through MobileNet, assumes variables have been loaded. This does
   * standard ImageNet pre-processing before inferring through the model. This
   * method returns named activations as well as softmax logits.
   *
   * @param input un-preprocessed input Array.
   * @return The softmax logits.
   */
  protected predict (input: tfc.Tensor): tfc.Tensor1D {
    const preprocessedInput = tfc.div(
      tfc.sub(input.asType('float32'), PREPROCESS_DIVISOR),
      PREPROCESS_DIVISOR)
    const reshapedInput = preprocessedInput.reshape([
      1,
      ...preprocessedInput.shape,
    ])
    const dict: TensorMap = {}
    dict[INPUT_NODE_NAME] = reshapedInput
    return this.model!.execute(dict, OUTPUT_NODE_NAME) as tfc.Tensor1D
  }

  protected getTopKClasses (predictions: tfc.Tensor1D, topK: number) {
    const values = predictions.dataSync()
    predictions.dispose()

    let predictionList = []
    for (let i = 0; i < values.length; i++) {
      predictionList.push({ index: i, value: values[i] })
    }
    predictionList = predictionList.sort((a, b) => {
      return b.value - a.value
    }).slice(0, topK)

    return predictionList.map(x => ({
      label: EMOJI_CLASSES[x.index as EmojiId],
      value: x.value,
    }))
  }

}

export {
  MOBILENET_SIZE,
  EmojiNet,
}
