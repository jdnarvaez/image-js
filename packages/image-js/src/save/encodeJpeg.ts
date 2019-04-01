import { encode } from 'jpeg-js';

import { Image, ImageKind, ColorDepth } from '../Image';

export function encodeJpeg(image: Image): Uint8Array {
  if (image.kind !== ImageKind.RGBA) {
    image = image.convertColor(ImageKind.RGBA);
  }
  if (image.depth !== ColorDepth.UINT8) {
    image = image.convertDepth(ColorDepth.UINT8);
  }

  // Image data after depth conversion will always be UInt8Array

  // @ts-ignore
  const buffer = encode(image).data;
  return new Uint8Array(buffer, buffer.byteOffset, buffer.byteLength);
}