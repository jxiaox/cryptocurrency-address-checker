import IChecker from '../interfaces/checker.interface';

class BitcoinChecker implements IChecker {
  public validate(address: string): boolean {
    return address.length > 0;
  }
}

export default new BitcoinChecker();
