import crypto  from 'crypto'
import fs      from 'fs'
import path    from 'path'

import {
  createCanvas as _createCanvas,
  createImageData as _createImageData,
  loadImage as _loadImage,
  Canvas,
} from 'canvas'

// const _createCanvas     = require('canvas').createCanvas
// const _createImageData  = require('canvas').createImageData
// const _loadImage        = require('canvas').loadImage

function imageMd5 (image: ImageData | HTMLImageElement): string {
  if ((image as any).src) {  // HTMLImageElement
    image = imageToData(image as HTMLImageElement)
  } else {
    image = image as ImageData
  }

  const buffer = Buffer.from(image.data.buffer as ArrayBuffer)
  return crypto.createHash('md5')
    .update(buffer)
    .digest('hex')
}

function imageToData (image: HTMLImageElement): ImageData {
  const canvas  = createCanvas(image.width, image.height)
  const ctx     = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('getContext found null')
  }

  ctx.drawImage(image, 0, 0, image.width, image.height)
  const imageData = ctx.getImageData(0, 0, image.width, image.height)

  return imageData
}

async function dataToImage (data: ImageData): Promise<HTMLImageElement> {
  const canvas = createCanvas(data.width, data.height)
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('getContext found null')
  }
  ctx.putImageData(data, 0, 0)
  const dataUrl = canvas.toDataURL()
  const image = await loadImage(dataUrl)
  return image
}

function cropImage (
  imageData:  ImageData,
  x:          number,
  y:          number,
  width:      number,
  height:     number,
): ImageData {
  const canvas  = createCanvas(imageData.width, imageData.height)
  const ctx     = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('getContext found null')
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
  // Issues #12 negative x/y value bug
  ctx.putImageData(imageData, 0, 0)
  const croppedImageData = ctx.getImageData(x, y, width, height)

  return croppedImageData
}

async function resizeImage (
  image:  ImageData | HTMLImageElement,
  width:  number,
  height: number,
): Promise<ImageData> {
  if ((image as any).data) {  // ImageData
    image = await dataToImage(image as ImageData)
  } else {
    image = image as HTMLImageElement
  }

  const canvas  = createCanvas(width, height)
  const ctx     = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('getContext found null')
  }

  ctx.drawImage(image, 0, 0, width, height)
  const resizedImage = ctx.getImageData(0, 0, width, height)

  return resizedImage
}

async function loadImage (src: string | Buffer): Promise<HTMLImageElement> {
  const image = await _loadImage(src)
  if (!image) {
    throw new Error('no image for src:' + src)
  }
  return image as any as HTMLImageElement
}

function createCanvas (
  width: number,
  height: number,
): HTMLCanvasElement {
  const canvas = _createCanvas(width, height)
  return canvas as any as HTMLCanvasElement
}

async function saveImage (
  imageData: ImageData,
  filename:  string,
): Promise<void> {
  const ext = path.extname(filename) as '.png' | '.jpg'

  const canvas = createCanvas(imageData.width, imageData.height)
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('no ctx')
  }
  ctx.putImageData(imageData, 0, 0)

  let stream: NodeJS.ReadableStream
  switch (ext) {
    case '.jpg':
      stream = (canvas as any as Canvas).createJPEGStream()
      break

    case '.png':
      stream = (canvas as any as Canvas).createPNGStream()
      break

    default:
      throw new Error('unsupported type: ' + ext)
  }

  const outFile = fs.createWriteStream(filename)
  stream.pipe(outFile)

  return new Promise<void>((resolve, reject) => {
    outFile.on('close', resolve)
    outFile.on('error', reject)
    stream.on('error', reject)
  })
}

function createImageData (
  array:  Uint8ClampedArray,
  width:  number,
  height: number,
): ImageData {
  return _createImageData(array, width, height)
}

function toDataURL (
  data: ImageData,
): string {
  const canvas  = createCanvas(data.width, data.height)
  const ctx     = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('getContext found null')
  }
  ctx.putImageData(data, 0, 0)
  return canvas.toDataURL()
}

function toBuffer (
  data: ImageData,
): Buffer {
  const canvas  = createCanvas(data.width, data.height)
  const ctx     = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('getContext found null')
  }
  ctx.putImageData(data, 0, 0)

  // https://github.com/Automattic/node-canvas#canvastobuffer
  return (canvas as any as Canvas).toBuffer()
}

export {
  saveImage,
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
}
