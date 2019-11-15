import CoinChecker from '@/interfaces/coinChecker';
import { Network_type } from '@/utils/constants';
import bech32 from 'bech32';

class BtmChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('btm', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof BtmChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const decoded = bech32.decode(address);
      if (decoded.prefix === 'bm') {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}

export default BtmChecker;
