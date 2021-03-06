import CoinChecker from '../interfaces/coinChecker';
import { bs58, sha256 } from '../lib/hash';
import { toHex } from '../utils';
import { Network_type } from '../utils/constants';

class NEOChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('neo', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof NEOChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const bytes = bs58.decode(address);
      const computedChecksum = sha256(
        sha256(bytes.slice(0, -4), 'BUFFER')
      ).substr(0, 8);
      const checksum = toHex(bytes.slice(-4));
      return computedChecksum === checksum;
    } catch (error) {
      return false;
    }
  }
}

export default NEOChecker;
