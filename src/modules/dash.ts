import CoinChecker from '../interfaces/coinChecker';
import { bs58, sha256 } from '../lib/hash';
import { toHex } from '../utils';
import { Network_type } from '../utils/constants';
import BitcoinChecker from './bitcoin';

class DashChecker extends CoinChecker {
  protected bitcoinChecker: BitcoinChecker;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('dash', networkType);
    this.bitcoinChecker = new BitcoinChecker(networkType);
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
        return this.coinConfig.addressTypes!.includes(addressType);
      }
    }

    return false;
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
    try {
      const decoded: Buffer = bs58.decode(address);
      if (this.isLegalAddress(address, decoded)) {
        if (this.verifyChecksum(address)) {
          return toHex(decoded.slice(0, 1));
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {Buffer} decoded
   * @returns {boolean}
   * @memberof XrpChecker
   */
  protected verifyChecksum(address: string): boolean {
    const decoded: Buffer = bs58.decode(address);
    const decodedChecksum: string = toHex(decoded.slice(-4));
    const payloadHex: Buffer = decoded.slice(0, -4);
    const payloadChecksum: string = this.getChecksum(payloadHex);
    return decodedChecksum === payloadChecksum;
  }

  protected getChecksum(payloadHex: Buffer): string {
    const hash = sha256(sha256(payloadHex, 'BUFFER'));
    return hash.substr(0, 8);
  }

  protected isLegalAddress(address: string, decoded: Buffer): boolean {
    if (address && decoded && decoded.length > 0) {
      return true;
    }
    return false;
  }
}

export default DashChecker;
