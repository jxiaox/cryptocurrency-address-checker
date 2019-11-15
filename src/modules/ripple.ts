import CoinChecker from '@/interfaces/coinChecker';
import { sha256 } from '@/lib/hash';
import { toHex } from '@/utils';
import { Network_type } from '@/utils/constants';
import baseX from 'base-x';

const ALLOWED_CHARS =
  'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

const RPCA = baseX(ALLOWED_CHARS);

class XrpChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('xrp', networkType);
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
      const bytes = RPCA.decode(address);
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

export default XrpChecker;
