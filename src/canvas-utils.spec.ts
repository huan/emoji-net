#!/usr/bin/env ts-node
import path from 'path'

import { test } from 'tstest'

import { fixtureImageData3x3  } from '../tests/fixtures/image-data-3x3'

import {
  createCanvas,
  createImageData,
  cropImage,
  dataToImage,
  imageMd5,
  imageToData,
  loadImage,
  resizeImage,
  toDataURL,
  toBuffer,
}                         from './canvas-utils'

test('resizeImage()', async t => {
  const UINT8_CLAMPED_ARRAY = new Uint8ClampedArray([
    0, 0, 0, 255,
    0, 0, 0, 255,
    100, 100, 100, 255,
    100, 100, 100, 255,
  ])
  const EXPECTED_DATA = new Uint8ClampedArray([
    50, 50, 50, 255,
  ])
  const imageData = createImageData(UINT8_CLAMPED_ARRAY, 2, 2)
  const resizedData = await resizeImage(imageData, 1, 1)

  t.same(resizedData.data, EXPECTED_DATA, 'should get resized data')
})

test.skip('imageMd5()', async t => {
  const IMAGE_FILE = path.join(
    __dirname,
    '..',
    'tests',
    'fixtures',
    'aligned-face.png',
    // 'two-faces.jpg',
  )
  const EXPECTED_MD5 = '26f0d74e9599b7dec3fe10e8f12b063e'

  const image = await loadImage(IMAGE_FILE)
  const md5Text = imageMd5(image)
  // console.info(md5Text)
  t.equal(md5Text, EXPECTED_MD5, 'should calc md5 right')
})

test('cropImage()', async t => {
  const imageData = fixtureImageData3x3()
  /**
   * 1 2 3
   * 4 5 6
   * 7 8 9
   */

  const EXPECTED_DATA_CROP_0_0_1_1 = [
    1, 1, 1, 255,
  ]
  const EXPECTED_DATA_CROP_1_1_1_1 = [
    5, 5, 5, 255,
  ]
  const EXPECTED_DATA_CROP_0_0_3_2 = [
    1, 1, 1, 255,
    2, 2, 2, 255,
    3, 3, 3, 255,

    4, 4, 4, 255,
    5, 5, 5, 255,
    6, 6, 6, 255,
  ]

  void t.test('should get right for rect[0, 0, 1, 1]', async t => {
    const croppedImage = cropImage(imageData, 0, 0, 1, 1)
    t.same(croppedImage.data, EXPECTED_DATA_CROP_0_0_1_1, 'should get cropped image data right for [0 0 1 1]')
  })

  void t.test('should get right for rect[1, 1, 1, 1]', async t => {
    const croppedImage = cropImage(imageData, 1, 1, 1, 1)
    t.same(croppedImage.data, EXPECTED_DATA_CROP_1_1_1_1, 'should get cropped image data right for [1 1 1 1]')
  })

  void t.test('should get right for rect[0, 0, 3, 2]', async t => {
    const croppedImage = cropImage(imageData, 0, 0, 3, 2)
    t.same(croppedImage.data, EXPECTED_DATA_CROP_0_0_3_2, 'should get cropped image data right for [0 0 3 2]')
  })
})

test('Image/Data convert', async t => {
  const IMAGE_DATA = fixtureImageData3x3()
  // tslint:disable-next-line:max-line-length
  const IMAGE = await loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABmJLR0QA/wD/AP+gvaeTAAAAHElEQVQImWNkZGT8z8jIyMDIyMjAwszMzICVAwAmtQEw+Y/4igAAAABJRU5ErkJggg==')

  void t.test('dataToImage()', async t => {
    const canvas = createCanvas(3, 3)
    const ctx = canvas.getContext('2d')
    const image = await dataToImage(IMAGE_DATA)
    if (!ctx) {
      throw new Error('no ctx')
    }
    ctx.drawImage(image, 0, 0)
    const data = ctx.getImageData(0, 0, 3, 3)
    t.same(data, IMAGE_DATA, 'should conver data to image right')
  })

  void t.test('imageToData', async t => {
    const data = imageToData(IMAGE)
    t.same(data, IMAGE_DATA, 'should conver image to data right')
  })
})

test('Data Convertions', async t => {
  const IMAGE_DATA = fixtureImageData3x3()
  const EXPECTED_DATA_URL = 'data:image/png;base64,'
    + 'iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABmJLR0QA/wD/AP+gvaeTAA'
    + 'AAHElEQVQImWNkZGT8z8jIyMDIyMjAwszMzICVAwAmtQEw+Y/4igAAAABJRU5ErkJggg=='

  const EXPECTED_BUFFER = Buffer.from(EXPECTED_DATA_URL.split(',')[1], 'base64')

  void t.test('toDataURL()', async t => {
    const dataURL = await toDataURL(IMAGE_DATA)
    t.equal(dataURL, EXPECTED_DATA_URL, 'should convert image data to data url right')
  })

  void t.test('toBuffer()', async t => {
    const buffer = toBuffer(IMAGE_DATA)
    t.ok(buffer.equals(EXPECTED_BUFFER), 'should convert image data to buffer right')
  })
})
