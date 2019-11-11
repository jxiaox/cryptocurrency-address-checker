import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';

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
    // check address regex or checksum address
    return coinsConfig.xlm.addressReg.some(reg => reg.test(address));
  }
}

export default XLMChecker;
