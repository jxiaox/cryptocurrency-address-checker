import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import { decode, IAddressInfo } from 'cashaddrjs';
import BitcoinChecker from './bitcoin';

class BitcoinCashChecker extends BitcoinChecker {
  protected bitcoinChecker: BitcoinChecker;
  protected prefix: string = '';
  protected type: string = '';
  protected hash: Uint8Array = new Uint8Array();
  // tslint:disable-next-line:no-object-literal-type-assertion
  protected info: IAddressInfo = {} as IAddressInfo;
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super(networkType);
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.btc.algorithm;
    this.name = coinsConfig.btc.fullName;
    this.symbol = coinsConfig.btc.symbol;
    this.bitcoinChecker = new BitcoinChecker(networkType);
  }

  public isValid(address: string): boolean {
    if (this.preCheck(address)) {
      if (this.bitcoinChecker.preCheck(address)) {
        return this.bitcoinChecker.isValid(address);
      }
      const addressType = this.getAddressType(address);
      if (addressType) {
        return coinsConfig.bch.addressTypes.includes(addressType);
      }
    }

    return false;
  }

  /**
   * 通过正则预检查
   * @param address 地址
   */
  public preCheck(address: string): boolean {
    return coinsConfig.bch.addressReg.some(reg => reg.test(address));
  }

  /**
   * Decodes the given address into its constituting prefix, type and hash. See [#encode()]{@link encode}.
   *
   * @static
   * @param {string} address Address to decode. E.g.: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a'.
   * @returns {IAddressInfo}
   * @throws {ValidationError}
   */
  public decode(address: string): IAddressInfo {
    return decode(address);
  }

  /**
   * 获取地址类型
   * 新的bch地址是base32加密的
   *
   * @protected
   * @param {string} address
   * @returns {(string | null)}
   * @memberof BitcoinChecker
   */
  protected getAddressType(address: string): string | null {
    try {
      const obj = this.decode(address);
      return obj.type;
    } catch (error) {
      return null;
    }
  }
}

export default BitcoinCashChecker;
