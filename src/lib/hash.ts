import shaJs from 'sha.js';

/**
 * Calculate the sha256 digest of a string.
 *
 * ### Example (es imports)
 * ```js
 * import { sha256 } from 'typescript-starter'
 * sha256('test')
 * // => '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
 * ```
 *
 * @returns sha256 message digest
 */
export function sha256(message: string | Buffer): string;
export function sha256(message: string | Buffer, type: string): Buffer;
export function sha256(
  message: string | Buffer,
  type: string = 'hex'
): string | Buffer {
  const hash = shaJs('sha256').update(message);
  if (type === 'hex') {
    return hash.digest('hex');
  } else {
    return hash.digest();
  }
}

// export function sha256(message: string | Buffer): Buffer {
//   return shaJs('sha256')
//     .update(message)
//     .digest();
// }
// export function foo(x: string): string;
// export function foo(y: number, z: string):any;
// export function foo(y: string | number, z?: string): string { return y + z }

export import bs58 = require('bs58');
