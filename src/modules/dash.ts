import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import BitcoinChecker from './bitcoin';

class DashChecker extends BitcoinChecker {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    super();
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.dash.algorithm;
    this.name = coinsConfig.dash.fullName;
    this.symbol = coinsConfig.dash.symbol;
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
      const addressType = this.getAddressType(address);
      if (addressType) {
        return coinsConfig.dash.addressTypes.includes(addressType);
      }
    }

    return false;
  }

  /**
   * 通过正则预检查
   * @param address 地址
   */
  public preCheck(address: string): boolean {
    return coinsConfig.dash.addressReg.some(reg => reg.test(address));
  }
}

export default DashChecker;
