import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { bs58, sha256 } from '@/lib/hash';
import { toHex } from '@/utils';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';

class BitcoinChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public expectedLength: number;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.btc.algorithm;
    this.name = coinsConfig.btc.fullName;
    this.symbol = coinsConfig.btc.symbol;
    this.expectedLength = coinsConfig.btc.addressExpectedLength;
  }

  public validate(address: string): boolean {
    if (this.preCheck(address)) {
      const addressType = this.getAddressType(address);
      if (addressType) {
        return coinsConfig.btc.addressTypes.includes(addressType);
      }
    }

    return false;
  }
  /**
   * 通过正则预检查
   * @param address 地址
   */
  public preCheck(address: string): boolean {
    return coinsConfig.btc.addressReg.some(reg => reg.test(address));
  }

  /**
   * 获取地址类型
   *
   * @protected
   * @param {string} address
   * @returns {(string | null)}
   * @memberof BitcoinChecker
   */
  protected getAddressType(address: string): string | null {
    const decoded: Buffer = bs58.decode(address);
    if (this.isLegalAddress(address, decoded)) {
      const decodedLength: number = decoded.length;

      const decodedChecksum: string = toHex(
        decoded.slice(decodedLength - 4, decodedLength)
      );

      const payloadHex: Buffer = decoded.slice(0, decodedLength - 4);

      const payloadChecksum: string = this.getChecksum(payloadHex);
      if (decodedChecksum === payloadChecksum) {
        return toHex(decoded.slice(0, this.expectedLength - 24));
      }
    }
    return null;
  }

  protected getChecksum(payloadHex: Buffer): string {
    const hash = sha256(sha256(payloadHex, 'buffer'));
    return hash.substr(0, 8);
  }

  protected isLegalAddress(address: string, decoded: Buffer): boolean {
    if (address && decoded && decoded.length > 0) {
      if (decoded.length === this.expectedLength) {
        return true;
      }
    }
    return false;
  }
}

export default BitcoinChecker;
