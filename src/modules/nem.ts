import nem from 'nem-sdk';
import CoinChecker from '../interfaces/coinChecker';
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
      return nem.model.address.isValid(address);
    } catch (error) {
      return false;
    }
  }
}

export default NemChecker;
