/**
 * 转换为16进制
 *
 * @param {Buffer} bytes
 * @returns {string}
 */
function toHex(bytes: Buffer): string {
  return Array.from(bytes, byte => {
    // tslint:disable-next-line:no-bitwise
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
}

/**
 * Returns the concatenation a and b.
 *
 * @private
 * @param {Uint8Array} a
 * @param {Uint8Array} b
 * @returns {Uint8Array}
 * @throws {ValidationError}
 */
function concat(a: Uint8Array, b: Uint8Array): Uint8Array {
  const ab: Uint8Array = new Uint8Array(a.length + b.length);
  ab.set(a);
  ab.set(b, a.length);
  return ab;
}

export function toBuffer(arr: ArrayBuffer | Uint8Array): Buffer;

/**
 * 转换为Buffer
 *
 * @param {ArrayBuffer} arr
 * @returns {Buffer}
 */
export function toBuffer(arr: ArrayBuffer | Uint8Array): Buffer {
  const buf: Buffer = Buffer.alloc(arr.byteLength);
  const view: Uint8Array =
    arr instanceof Uint8Array ? arr : new Uint8Array(arr);
  for (let i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
}

/**
 * 转换为ArrayBuffer
 *
 * @export
 * @param {Buffer} buf
 * @returns {ArrayBuffer}
 */
export function toArrayBuffer(buf: Buffer): ArrayBuffer {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}

/**
 * Derives an array from the given prefix to be used in the computation
 * of the address' checksum.
 *
 * @private
 * @param {string} prefix Network prefix. E.g.: 'bitcoincash'.
 * @returns {Uint8Array}
 */
function prefixToUint5Array(prefix: string): Uint8Array {
  const result = new Uint8Array(prefix.length);
  for (let i = 0; i < prefix.length; ++i) {
    // tslint:disable-next-line:no-bitwise
    result[i] = prefix[i].charCodeAt(0) & 31;
  }
  return result;
}

/**
 * swap16
 *
 * @param {number} num
 * @returns {number}
 */
function swap16(num: number): number {
  // tslint:disable: no-bitwise
  const lower = num & 0xff;
  const upper = (num >> 8) & 0xff;
  return (lower << 8) | upper;
}

/**
 * number to hex
 *
 * @param {number} num
 * @returns {string}
 */
function numberToHex(num: number): string {
  let hex = num.toString(16);
  if (hex.length % 2 === 1) {
    hex = '0' + hex;
  }
  return hex;
}

export { toHex, concat, prefixToUint5Array, swap16, numberToHex };
