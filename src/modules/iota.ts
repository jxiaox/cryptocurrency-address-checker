import CoinChecker from '@/interfaces/coinChecker';
import { Network_type } from '@/utils/constants';
import { isValidChecksum } from '@iota/checksum';

class IOTAChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('iota', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof IOTAChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      return isValidChecksum(address);
    } catch (error) {
      return false;
    }
  }
}

export default IOTAChecker;
