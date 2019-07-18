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

export function toBuffer(arr: ArrayBuffer): Buffer;
export function toBuffer(arr: Uint8Array): Buffer;

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

export { toHex };
