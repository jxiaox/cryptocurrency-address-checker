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
    return sha256(sha256(bodyHex)).substr(0, 8);
  }

  protected isLegalAddress(address: string, decoded: Buffer): boolean {
    if (address && decoded && decoded.length > 0) {
      if (decoded.length === this.EXPECTED_LENGTH) {
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
    const decoded: Buffer = bs58.decode(address);

    if (this.isLegalAddress(address, decoded)) {
      const decodedLength: number = decoded.length;

      const checksumHex: string = toHex(
        decoded.slice(decodedLength - 4, decodedLength)
      );
      const bodyHex: string = toHex(decoded.slice(0, decodedLength - 4));
      const baseChecksum: string = this.getChecksum(bodyHex);
      console.log('addressChecksum', checksumHex, bodyHex, baseChecksum);
      if (checksumHex === baseChecksum) {
        return toHex(decoded.slice(0, this.EXPECTED_LENGTH - 24));
      }
    }
    return null;
  }
}

export default new BitcoinChecker();
