import baseX from 'base-x';
import Blake2b from 'blake2b';
import bs58 from 'bs58';
import CryptoJS from 'crypto-js';
import { keccak256 } from 'js-sha3';
import shaJs from 'sha.js';
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

function sha3(message: string): string {
  const versionPrefixedRipemd160Hash = CryptoJS.enc.Hex.parse(
    message.slice(0, 42)
  );
  const tempHash = CryptoJS.SHA3(versionPrefixedRipemd160Hash, {
    outputLength: 256
  });

  return CryptoJS.enc.Hex.stringify(tempHash);
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
