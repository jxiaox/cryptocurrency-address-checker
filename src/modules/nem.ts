import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import nem from 'nem-sdk';

class NemChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.xem.algorithm;
    this.name = coinsConfig.xem.fullName;
    this.symbol = coinsConfig.xem.symbol;
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
    return coinsConfig.xem.addressReg.some(reg => reg.test(address));
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
