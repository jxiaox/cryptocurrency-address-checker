import { coinsConfig } from '@/utils/configs';
import BitcoinChecker from './bitcoin';
class BitcoinCashChecker extends BitcoinChecker {
  /**
   * 通过正则预检查
   * @param address 地址
   */
  public preCheck(address: string): boolean {
    return coinsConfig.btc.addressReg[this.networkType].test(address);
  }
}

export default BitcoinCashChecker;
