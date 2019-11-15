import baseX from 'base-x';
import Blake2b from 'blake2b';
import bs58 from 'bs58';
import { keccak256 } from 'js-sha3';
import jsSHA from 'jssha';
import shaJs from 'sha.js';
import { toArrayBuffer } from '../utils';
// import * as base32 from './base32';
import Blake256 from './blake256';
type ShaDataFormat = 'HEX' | 'TEXT' | 'BUFFER';

const base32 = baseX('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567');

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
export function sha256(message: string | Buffer, type: ShaDataFormat): Buffer;
export function sha256(
  message: string | Buffer,
  type: ShaDataFormat = 'HEX'
): string | Buffer {
  const hash = shaJs('sha256').update(message);
  if (type === 'HEX') {
    return hash.digest('hex');
  } else {
    return hash.digest();
  }
}

function sha3(message: string | Buffer, type: ShaDataFormat = 'HEX'): string {
  const shaObj = new jsSHA('SHA3-256', 'TEXT');
  if (type === 'BUFFER') {
    shaObj.setHMACKey(toArrayBuffer(message as Buffer), 'ARRAYBUFFER');
  } else {
    shaObj.setHMACKey(message as string, 'TEXT');
  }
  return shaObj.getHMAC('HEX');
}
function blake2b(input: Buffer): Uint8Array {
  const output = new Uint8Array(32);
  Blake2b(output.length)
    .update(input)
    .digest(output);
  return output;
}

function blake256(hexString: string): string {
  return new Blake256().update(hexString, 'hex').digest('hex');
}

export { bs58, sha3, base32, blake2b, keccak256, blake256 };
