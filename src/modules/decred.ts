import CoinChecker from '@/interfaces/coinChecker';
import { blake256, bs58 } from '@/lib/hash';
import { toHex } from '@/utils';
import { Network_type } from '@/utils/constants';

class DCRChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('dcr', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof DCRChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const bytes = bs58.decode(address);
      const computedChecksum = blake256(
        blake256(toHex(bytes.slice(0, -4)))
      ).substr(0, 8);
      const checksum = toHex(bytes.slice(-4));
      return computedChecksum === checksum;
    } catch (error) {
      return false;
    }
  }
}

export default DCRChecker;
