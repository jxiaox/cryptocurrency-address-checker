import { coinsConfig } from '../utils/configs';
import { Network_type } from '../utils/constants';
import IChecker from './checker.interface';
import ICoin from './coin.interface';
import { ICoinConfig } from './coinConfig.interface';

class CoinChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;
  protected coin: string;
  protected coinConfig: ICoinConfig;

  constructor(coin: string, networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.coinConfig = coinsConfig[coin];
    this.hashAlgorithm = this.coinConfig.algorithm;
    this.name = this.coinConfig.fullName;
    this.symbol = this.coinConfig.symbol;
    this.coin = coin;
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
    return this.coinConfig.addressReg.some(reg => reg.test(address));
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
    throw new Error('Method not implemented.' + address);
  }
}

export default CoinChecker;
