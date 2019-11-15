import CoinChecker from '@/interfaces/coinChecker';
import { Network_type } from '@/utils/constants';
import isValid from 'nano-address-validator';

class NanoChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('nano', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof NanoChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      return isValid(address);
    } catch (error) {
      return false;
    }
  }
}

export default NanoChecker;
