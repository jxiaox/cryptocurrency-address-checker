import CoinChecker from '@/interfaces/coinChecker';
import { bs58 } from '@/lib/hash';
import { Network_type } from '@/utils/constants';

class ADAChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('ada', networkType);
  }
  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof XrpChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const decoded: Buffer = bs58.decode(address);
      return !!decoded;
    } catch (error) {
      return false;
    }
  }
}

export default ADAChecker;
