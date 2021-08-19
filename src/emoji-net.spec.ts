#!/usr/bin/env ts-node

/**
 *   Wechaty Chatbot SDK - https://github.com/wechaty/wechaty
 *
 *   @copyright 2016 Huan LI (李卓桓) <https://github.com/huan>, and
 *                   Wechaty Contributors <https://github.com/wechaty>.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License")
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
import path from 'path'

import { test } from 'tstest'
import * as tfc from '@tensorflow/tfjs-core'

import {
  loadImage,
  resizeImage,
  createCanvas,
}                   from './canvas-utils'
import {
  MOBILENET_SIZE,
  EmojiNet,
}                   from './emoji-net'

test('EmojiNet smoke testing', async t => {

  const emojinet = new EmojiNet()
  await emojinet.load()

  const IMAGE_LABEL_LIST = [
    {
      file: path.join(
        __dirname,
        '../tests/fixtures/hand.jpg',
      ),
      label: 'hand',
    },
    {
      file: path.join(
        __dirname,
        '../tests/fixtures/sofa.jpg',
      ),
      label: 'sofa',
    },
  ]

  const emojiListList = await Promise.all(
    IMAGE_LABEL_LIST
      .map(x => x.file)
      .map(file => emojinet.recognize(file))
  )

  const emojiList = emojiListList.map(x => x[0])
  const EXPECTED_LIST = IMAGE_LABEL_LIST.map(x => x.label)

  t.same(emojiList, EXPECTED_LIST, 'should get the labels right')

  await emojinet.dispose()
})

test('EmojiNet predict() & getTopKClasses()', async t => {

  class EmojiNetTest extends EmojiNet {

    predict (input: tfc.Tensor): tfc.Tensor1D  {
      return super.predict(input)
    }

    getTopKClasses (predictions: tfc.Tensor1D, topK: number) {
      return super.getTopKClasses(predictions, topK)
    }

  }

  const emojinet = new EmojiNetTest()
  await emojinet.load()

  const IMAGE_LABEL_LIST = [
    {
      file: path.join(
        __dirname,
        '../tests/fixtures/hand.jpg',
      ),
      name: 'hand',
    },
    {
      file: path.join(
        __dirname,
        '../tests/fixtures/sofa.jpg',
      ),
      name: 'sofa',
    },
  ]

  for (const { file, name } of IMAGE_LABEL_LIST) {
    const image = await loadImage(file)
    const resizedImage = await resizeImage(image, MOBILENET_SIZE, MOBILENET_SIZE)

    const canvas = await createCanvas(MOBILENET_SIZE, MOBILENET_SIZE)
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw new Error('no ctx')
    }
    ctx.putImageData(resizedImage, 0, 0)
    const pixels = tfc.fromPixels(canvas)
    const result = await emojinet.predict(pixels)

    const top2 = emojinet.getTopKClasses(result, 2)
    t.equal(top2[0].label, name, 'should get the right lable: ' + name)
  }

  await emojinet.dispose()
})
