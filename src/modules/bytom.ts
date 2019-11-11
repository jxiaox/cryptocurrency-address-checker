import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
// import { bs58, sha256 } from '@/lib/hash';
// import { toHex } from '@/utils';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import bech32 from 'bech32';

class BtmChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.btm.algorithm;
    this.name = coinsConfig.btm.fullName;
    this.symbol = coinsConfig.btm.symbol;
  }

  /**
   * Checks if the given string is an address
   *
   * @method isValid
   *
   * @param {String} address the given HEX address
   *
   * @returns {Boolean}
   */
  public isValid(address: string): boolean {
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
    return coinsConfig.btm.addressReg.some(reg => reg.test(address));
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof BtmChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const decoded = bech32.decode(address);
      if (decoded.prefix === 'bm') {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}

export default BtmChecker;
