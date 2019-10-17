import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import bech32 from 'bech32';

class ATOMChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.atom.algorithm;
    this.name = coinsConfig.atom.fullName;
    this.symbol = coinsConfig.atom.symbol;
  }

  /**
   * Checks if the given string is an address
   *
   * @method validate
   *
   * @param {String} address the given HEX address
   *
   * @returns {Boolean}
   */
  public validate(address: string): boolean {
    if (this.preCheck(address)) {
      return this.verifyChecksum(address);
    }

    return false;
  }

  /**
   * 通过正则预检查
   * @param address 地址
   */
  public preCheck(address: string): boolean {
    return coinsConfig.atom.addressReg.some(reg => reg.test(address));
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof ATOMChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const decoded = bech32.decode(address);
      if (decoded.prefix === 'cosmos') {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}

export default ATOMChecker;
