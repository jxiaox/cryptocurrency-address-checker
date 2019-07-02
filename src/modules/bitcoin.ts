import IChecker from '@/interfaces/checker.interface';
import { bs58, sha256 } from '@/lib/hash';
import { toHex } from '@/utils';

class BitcoinChecker implements IChecker {
  protected EXPECTED_LENGTH: number = 25;
  protected HASH_FUNCTION: string = 'sha256';
  public validate(address: string): boolean {
    const addressType = this.getAddressType(address);
    console.log('addressType', addressType);

    return address.length > 0;
  }
  protected getChecksum(bodyHex: string): string {
    console.log('bodyHex', bodyHex, sha256(bodyHex));
    const hash = sha256(sha256(bodyHex));
    console.log('hash', hash);
    // console.log('base58', toHex(bs58.encode(hash)));

    return hash.substr(0, 8);
  }

  protected isLegalAddress(address: string, decoded: string): boolean {
    if (address && decoded && decoded.length > 0) {
      if (decoded.length === this.EXPECTED_LENGTH * 2) {
        return true;
      }
    }
    return false;
  }

  /**
   * 获取地址类型
   *
   * @protected
   * @param {string} address
   * @returns {(string | null)}
   * @memberof BitcoinChecker
   */
  protected getAddressType(address: string): string | null {
    const decoded: string = toHex(bs58.decode(address));
    console.log('decoded', decoded);

    if (this.isLegalAddress(address, decoded)) {
      const decodedLength: number = decoded.length;

      const decodedChecksum: string = decoded.slice(
        decodedLength - 8,
        decodedLength
      );

      const bodyHex: string = decoded.slice(0, decodedLength - 8);

      const bodyChecksum: string = this.getChecksum(bodyHex);
      console.log('addressChecksum', decodedChecksum, bodyHex, bodyChecksum);
      if (decodedChecksum === bodyChecksum) {
        return decoded.slice(0, this.EXPECTED_LENGTH - 24);
      }
    }
    return null;
  }
}

export default new BitcoinChecker();
