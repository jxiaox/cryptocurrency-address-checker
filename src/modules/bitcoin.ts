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

  /**
   * 获取地址类型
   *
   * @public
   * @param {string} address
   * @returns {(string | null)}
   * @memberof BitcoinChecker
   */
  public getAddressType(address: string): string | null {
    const decoded: Buffer = bs58.decode(address);
    if (this.isLegalAddress(address, decoded)) {
      const decodedLength: number = decoded.length;

      const decodedChecksum: string = toHex(
        decoded.slice(decodedLength - 4, decodedLength)
      );

      const bodyHex: Buffer = decoded.slice(0, decodedLength - 4);

      const bodyChecksum: string = this.getChecksum(bodyHex);
      if (decodedChecksum === bodyChecksum) {
        console.log(
          toHex(decoded),
          decodedChecksum,
          toHex(bodyHex),
          bodyChecksum
        );

        return toHex(decoded.slice(0, this.EXPECTED_LENGTH - 24));
      }
    }
    return null;
  }
  protected getChecksum(bodyHex: Buffer): string {
    const hash = sha256(sha256(bodyHex, 'buffer'));
    return hash.substr(0, 8);
  }

  protected isLegalAddress(address: string, decoded: Buffer): boolean {
    if (address && decoded && decoded.length > 0) {
      if (decoded.length === this.EXPECTED_LENGTH) {
        return true;
      }
    }
    return false;
  }
}

export default new BitcoinChecker();
