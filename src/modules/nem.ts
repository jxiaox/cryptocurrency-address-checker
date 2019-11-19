import CoinChecker from '../interfaces/coinChecker';
import { base32, sha3 } from '../lib/hash';
import { toHex } from '../utils';
import { Network_type } from '../utils/constants';

class NemChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('xem', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof NemChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const tAddress = address
        .toString()
        .toUpperCase()
        .replace(/-/g, '');
      if (!tAddress || tAddress.length !== 40) {
        return false;
      }

      const decoded = toHex(base32.decode(tAddress));
      const stepThreeChecksum = sha3(decoded).substr(0, 8);

      return stepThreeChecksum === decoded.slice(42);
    } catch (error) {
      return false;
    }
  }
}

export default NemChecker;
