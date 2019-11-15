import CoinChecker from '@/interfaces/coinChecker';
import { base32 } from '@/lib/hash';
import { numberToHex, swap16, toHex } from '@/utils';
import { Network_type } from '@/utils/constants';
import crc from 'crc';

// tslint:disable-next-line:no-bitwise
const ed25519PublicKeyVersionByte = 6 << 3;

class XLMChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('xlm', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof DogeChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const bytes = base32.decode(address);
      if (bytes[0] !== ed25519PublicKeyVersionByte) {
        return false;
      }
      const computedChecksum = numberToHex(
        swap16(crc.crc16xmodem(bytes.slice(0, -2)))
      );
      const checksum = toHex(bytes.slice(-2));

      return computedChecksum === checksum;
    } catch (error) {
      return false;
    }
  }
}

export default XLMChecker;
