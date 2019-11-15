import CoinChecker from '@/interfaces/coinChecker';
import { Network_type } from '@/utils/constants';
import bech32 from 'bech32';

class ATOMChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('atom', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof ATOMChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const decoded = bech32.decode(address);
      if (decoded.prefix === 'cosmos') {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}

export default ATOMChecker;
