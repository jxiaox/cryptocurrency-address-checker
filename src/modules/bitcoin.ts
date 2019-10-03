import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { bs58, sha256 } from '@/lib/hash';
import { toHex } from '@/utils';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import bech32 from 'bech32';

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
      // segwit address
      if (address.substr(0, 2) === 'bc') {
        return this.validateBech32(address);
      }
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
   * 是否是SegWit 地址
   *
   * @param {string} address
   * @returns {boolean}
   * @memberof BitcoinChecker
   */
  public isSegWitAddress(address: string): boolean {
    return coinsConfig.btc.segWitAddressReg.test(address);
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
    let decoded: Buffer;
    if (this.isSegWitAddress(address)) {
      const bechRes: { prefix: string; words: Buffer } = bech32.decode(address);
      decoded = bechRes.words;
    } else {
      decoded = bs58.decode(address);
    }
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

  /**
   * validate bech32 address
   * https://www.reddit.com/r/Bitcoin/comments/62fydd/pieter_wuille_lecture_on_new_bech32_address_format/
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof BitcoinChecker
   */
  protected validateBech32(address: string): boolean {
    let decoded: { prefix: string; words: Buffer };

    try {
      decoded = bech32.decode(address);
    } catch (error) {
      return false;
    }

    const witnessVersion = decoded.words[0];

    if (witnessVersion < 0 || witnessVersion > 16) {
      return false;
    }

    const data = bech32.fromWords(decoded.words.slice(1));

    let type: string = '';

    if (data.length === 20) {
      type = 'p2wpkh';
    } else if (data.length === 32) {
      type = 'p2wsh';
    }
    console.log({
      bech32: true,
      type
    });

    // return {
    //   bech32: true,
    //   network,
    //   address,
    //   type
    // };
    return true;
  }

  protected getChecksum(payloadHex: Buffer): string {
    const hash = sha256(sha256(payloadHex, 'buffer'));
    return hash.substr(0, 8);
  }

  protected isLegalAddress(address: string, decoded: Buffer): boolean {
    if (address && decoded && decoded.length > 0) {
      return true;
    }
    return false;
  }
}

export default BitcoinChecker;
