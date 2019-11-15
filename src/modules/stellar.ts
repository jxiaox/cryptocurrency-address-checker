import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { base32 } from '@/lib/hash';
import { numberToHex, swap16, toHex } from '@/utils';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import crc from 'crc';

// tslint:disable-next-line:no-bitwise
const ed25519PublicKeyVersionByte = 6 << 3;

class XLMChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.xlm.algorithm;
    this.name = coinsConfig.xlm.fullName;
    this.symbol = coinsConfig.xlm.symbol;
  }

  /**
   * Checks if the given string is an address
   *
   * @method isValid
   *
   * @param {String} address the given HEX address
   *
   * @param {Number} chainId to define checksum behavior
   *
   * @returns {Boolean}
   */
  public isValid(address: string): boolean {
    if (this.preCheck(address)) {
      return this.verifyChecksum(address);
    }

    return false;
  }

  public preCheck(address: string): boolean {
    // check address regex or checksum address
    return coinsConfig.xlm.addressReg.some(reg => reg.test(address));
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
