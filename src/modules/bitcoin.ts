import bs58 from 'bs58';
import IChecker from '../interfaces/checker.interface';

class BitcoinChecker implements IChecker {
  protected EXPECTED_LENGTH: number = 25;
  protected HASH_FUNCTION: string = 'sha256';
  public validate(address: string): boolean {
    return address.length > 0;
  }

  protected isLegalAddress(address: string, decoded: Buffer) {
    if (decoded && decoded.length > 0) {
      if (decoded.length === this.EXPECTED_LENGTH) {
        return true;
      }
    }
    return false;
  }

  protected getAddressType(address: string): string | null {
    const decoded: Buffer = bs58.decode(address);
    if (this.isLegalAddress(address, decoded)) {
      return '';
    }
    return null;
  }
}

export default new BitcoinChecker();
