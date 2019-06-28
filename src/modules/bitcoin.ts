import bs58 from 'bs58';
import IChecker from '../interfaces/checker.interface';
import { toHex } from '../utils';

class BitcoinChecker implements IChecker {
  protected EXPECTED_LENGTH: number = 25;
  protected HASH_FUNCTION: string = 'sha256';
  public validate(address: string): boolean {
    this.getAddressType(address);
    return address.length > 0;
  }

  protected isLegalAddress(address: string, decoded: Buffer): boolean {
    if (address && decoded && decoded.length > 0) {
      if (decoded.length === this.EXPECTED_LENGTH) {
        return true;
      }
    }
    return false;
  }

  protected getAddressType(address: string): string | null {
    const decoded: Buffer = bs58.decode(address);
    console.log('d', decoded);

    if (this.isLegalAddress(address, decoded)) {
      const decodedLength: number = decoded.length;

      const addressChecksum: string = toHex(
        decoded.slice(decodedLength - 4, decodedLength)
      );
      console.log('addressChecksum', addressChecksum);
      return '';
    }
    return null;
  }
}

export default new BitcoinChecker();
