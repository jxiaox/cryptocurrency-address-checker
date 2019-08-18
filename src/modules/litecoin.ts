import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import BitcoinChecker from './bitcoin';

class LitecoinChecker extends BitcoinChecker {
  protected prefix: string = '';
  protected type: string = '';
  protected hash: Uint8Array = new Uint8Array();
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super(networkType);
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.ltc.algorithm;
    this.name = coinsConfig.ltc.fullName;
    this.symbol = coinsConfig.ltc.symbol;
    this.expectedLength = coinsConfig.ltc.addressExpectedLength;
  }

  public validate(address: string): boolean {
    if (this.preCheck(address)) {
      const addressType = this.getAddressType(address);
      if (addressType) {
        return coinsConfig.ltc.addressTypes[this.networkType].includes(
          addressType
        );
      }
    }

    return false;
  }

  /**
   * 通过正则预检查
   * @param address 地址
   */
  public preCheck(address: string): boolean {
    return coinsConfig.ltc.addressReg.some(reg => reg.test(address));
  }
}

export default LitecoinChecker;
