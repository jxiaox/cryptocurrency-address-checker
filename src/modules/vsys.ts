import CoinChecker from '@/interfaces/coinChecker';
import { blake2b, bs58, keccak256 } from '@/lib/hash';
import { Network_type } from '@/utils/constants';

class VSYSChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('vsys', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof VSYSChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const bytes = bs58.decode(address);
      const computedChecksum = keccak256.array(blake2b(bytes.slice(0, -4)));
      const checksum = bytes.slice(-4);
      for (let i = 0; i < 4; i++) {
        if (computedChecksum[i] !== checksum[i]) {
          return false;
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default VSYSChecker;
