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

import * as tfjs from '@tensorflow/tfjs'

import {
  EmojiId,
  EmojiName,
  EMOJI_CLASSES,
}                       from './emoji-classes'
import {
  createCanvas,
  loadImage,
  resizeImage,
}                         from './canvas-utils'

type TensorMap = {[name: string]: tfjs.Tensor}

const MOBILENET_SIZE = 224

// const MODEL_FILE_URL = 'https://emojiscavengerhunt.withgoogle.com/model/tensorflowjs_model.pb'
const WEIGHT_MANIFEST_FILE_URL = 'https://emojiscavengerhunt.withgoogle.com/model/weights_manifest.json'
// const MODEL_FILE_URL = 'file:///model/tensorflowjs_model.pb'
// const WEIGHT_MANIFEST_FILE_URL = 'file:///model/weights_manifest.json'
const INPUT_NODE_NAME = 'input'
const OUTPUT_NODE_NAME = 'final_result'
const PREPROCESS_DIVISOR = tfjs.scalar(255 / 2)

interface PredictItem {
  id          : EmojiId,
  name        : EmojiName,
  probobility : number,
}

class EmojiNet {

  model?: tfjs.GraphModel

  async load () {
    this.model = await tfjs.loadGraphModel(
      WEIGHT_MANIFEST_FILE_URL,
    )

    this.predict(tfjs.zeros([
      MOBILENET_SIZE,
      MOBILENET_SIZE,
      3,
    ]))
  }

  dispose () {
    if (this.model) {
      this.model.dispose()
    }
  }

  async recognize (src: string | Buffer): Promise<PredictItem[]> {
    const image         = await loadImage(src)
    const resizedImage  = await resizeImage(image, MOBILENET_SIZE, MOBILENET_SIZE)

    const canvas  = await createCanvas(MOBILENET_SIZE, MOBILENET_SIZE)
    const ctx     = canvas.getContext('2d')
    if (!ctx) { throw new Error('no ctx') }

    ctx.putImageData(resizedImage, 0, 0)
    const pixels = await tfjs.browser.fromPixelsAsync(canvas)

    const predictions = this.predict(pixels)
    const top3 = this.getTopKClasses(predictions, 3)

    return top3
  }

  /**
   * Infer through MobileNet, assumes variables have been loaded. This does
   * standard ImageNet pre-processing before inferring through the model. This
   * method returns named activations as well as softmax logits.
   *
   * @param input un-preprocessed input Array.
   * @return The softmax logits.
   */
  protected predict (input: tfjs.Tensor): tfjs.Tensor1D {
    const preprocessedInput = tfjs.div(
      tfjs.sub(input.asType('float32'), PREPROCESS_DIVISOR),
      PREPROCESS_DIVISOR)
    const reshapedInput = preprocessedInput.reshape([
      1,
      ...preprocessedInput.shape,
    ])
    const dict: TensorMap = {}
    dict[INPUT_NODE_NAME] = reshapedInput
    return this.model!.execute(dict, OUTPUT_NODE_NAME) as tfjs.Tensor1D
  }

  protected getTopKClasses (
    predictions: tfjs.Tensor1D,
    topK: number,
  ): PredictItem[] {
    const values = predictions.dataSync()
    predictions.dispose()

    let predictionList = []
    for (let i = 0; i < values.length; i++) {
      predictionList.push({
        index: i,
        probobility: values[i],
      })
    }
    predictionList = predictionList.sort((a, b) => {
      return b.probobility - a.probobility
    }).slice(0, topK)

    return predictionList.map(x => ({
      id: x.index as EmojiId,
      name: EMOJI_CLASSES[x.index as EmojiId],
      probobility: x.probobility,
    }))
  }

}

export {
  MOBILENET_SIZE,
  EmojiNet,
}
