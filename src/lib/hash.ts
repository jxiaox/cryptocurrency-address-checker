import { toArrayBuffer } from '@/utils';
import bs58 from 'bs58';
import jsSHA from 'jssha';
import shaJs from 'sha.js';
import * as base32 from './base32';

type ShaDataFormat = 'HEX' | 'TEXT' | 'BUFFER';

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

export function sha3(message: string | Buffer): string;
export function sha3(message: string | Buffer, type: ShaDataFormat): Buffer;
export function sha3(
  message: string | Buffer,
  type: ShaDataFormat = 'HEX'
): string | Buffer {
  const shaObj = new jsSHA('SHA3-256', 'TEXT');
  if (type === 'BUFFER') {
    shaObj.setHMACKey(toArrayBuffer(message as Buffer), 'ARRAYBUFFER');
  } else {
    shaObj.setHMACKey(message as string, 'TEXT');
  }

  return shaObj.getHMAC('HEX');
}

export { bs58, base32 };
