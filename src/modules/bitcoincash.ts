import { base32 } from '@/lib/hash';
import { concat, prefixToUint5Array } from '@/utils';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import bigInt from 'big-integer';
import BitcoinChecker from './bitcoin';

interface ICoinInfo {
  prefix: string;
  type: string;
  hash: Uint8Array;
}

class BitcoinCashChecker extends BitcoinChecker {
  protected bitcoinChecker: BitcoinChecker;
  protected prefix: string = '';
  protected type: string = '';
  protected hash: Uint8Array = new Uint8Array();
  // tslint:disable-next-line:no-object-literal-type-assertion
  protected info: ICoinInfo = {} as ICoinInfo;
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super(networkType);
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.btc.algorithm;
    this.name = coinsConfig.btc.fullName;
    this.symbol = coinsConfig.btc.symbol;
    this.expectedLength = coinsConfig.bch.addressExpectedLength;
    this.bitcoinChecker = new BitcoinChecker(networkType);
  }

  /**
   * 获取地址类型
   * 新的bch地址是base32加密的
   *
   * @public
   * @param {string} address
   * @returns {(string | null)}
   * @memberof BitcoinChecker
   */
  public getAddressType(address: string): string | null {
    // old bitcoin address type
    if (this.bitcoinChecker.preCheck(address)) {
      return this.bitcoinChecker.getAddressType(address);
    }
    const obj = this.decode(address);
    return obj.type;
  }
  /**
   * 通过正则预检查
   * @param address 地址
   */
  public preCheck(address: string): boolean {
    return coinsConfig.bch.addressReg[this.networkType].some(reg =>
      reg.test(address)
    );
  }

  /**
   * Decodes the given address into its constituting prefix, type and hash. See [#encode()]{@link encode}.
   *
   * @static
   * @param {string} address Address to decode. E.g.: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a'.
   * @returns {ICoinInfo}
   * @throws {ValidationError}
   */
  protected decode(address: string): ICoinInfo {
    const pieces = address.toLowerCase().split(':');
    if (pieces.length !== 2) {
      throw new Error('Missing prefix: ' + address + '.');
    }
    const prefix = pieces[0];
    const payload = base32.decode(pieces[1]);
    // const addressDecode = base32.decode(address);
    // base32 encoding
    // const decoded: Buffer = toBuffer(payload);
    // // if (this.isLegalAddress(address, decoded)) {
    //   const decodedLength: number = decoded.length;

    //   const decodedChecksum: string = toHex(
    //     decoded.slice(decodedLength - 8, decodedLength)
    //   );

    //   const payloadHex: Buffer = decoded.slice(0, decodedLength - 8);
    //   console.log(payloadHex, decodedChecksum);
    if (this.validateChecksum(payload, prefix)) {
      this.prefix = prefix;
      const payloadData = payload.subarray(0, -8);
      const versionByte = payloadData[0];
      const hash = payloadData.subarray(1);
      if (this.getHashSize(versionByte) !== hash.length * 8) {
        throw new Error('Invalid hash size: ' + address + '.');
      }
      const type = this.getType(versionByte);
      this.hash = hash;
      this.type = type;
      return {
        hash,
        prefix,
        type
      };
    } else {
      throw new Error('Invalid address: ' + address + '.');
    }
  }

  /**
   * Computes a checksum from the given input data as specified for the CashAddr
   * format: https://github.com/Bitcoin-UAHF/spec/blob/master/cashaddr.md.
   *
   * @private
   * @param {Uint8Array} data Array of 5-bit integers over which the checksum is to be computed.
   * @returns {BigInteger}
   */
  protected polymod(data: Uint8Array): bigInt.BigInteger {
    const GENERATOR = [
      0x98f2bc8e61,
      0x79b76d99e2,
      0xf33e5fb3c4,
      0xae2eabe2a8,
      0x1e4f43e470
    ];
    let checksum = bigInt(1);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < data.length; ++i) {
      const value = data[i];
      const topBits = checksum.shiftRight(35);
      checksum = checksum
        .and(0x07ffffffff)
        .shiftLeft(5)
        .xor(value);
      for (let j = 0; j < GENERATOR.length; ++j) {
        if (
          topBits
            .shiftRight(j)
            .and(1)
            .equals(1)
        ) {
          checksum = checksum.xor(GENERATOR[j]);
        }
      }
    }
    return checksum.xor(1);
  }

  /**
   * Returns the bit representation of the length in bits of the given
   * hash within the version byte.
   *
   * @private
   * @param {Uint8Array} hash Hash to encode represented as an array of 8-bit integers.
   * @returns {number}
   * @throws {ValidationError}
   */
  protected getHashSizeBits(hash: Uint8Array): number {
    switch (hash.length * 8) {
      case 160:
        return 0;
      case 192:
        return 1;
      case 224:
        return 2;
      case 256:
        return 3;
      case 320:
        return 4;
      case 384:
        return 5;
      case 448:
        return 6;
      case 512:
        return 7;
      default:
        throw new Error('Invalid hash size: ' + hash.length + '.');
    }
  }

  /**
   * Retrieves the the length in bits of the encoded hash from its bit
   * representation within the version byte.
   *
   * @private
   * @param {number} versionByte
   * @returns {number}
   */
  protected getHashSize(versionByte: number): number {
    // tslint:disable-next-line:no-bitwise
    switch (versionByte & 7) {
      case 0:
        return 160;
      case 1:
        return 192;
      case 2:
        return 224;
      case 3:
        return 256;
      case 4:
        return 320;
      case 5:
        return 384;
      case 6:
        return 448;
      case 7:
        return 512;
      default:
        throw new Error('Invalid hash size version byte: ' + versionByte + '.');
    }
  }

  /**
   * Retrieves the address type from its bit representation within the
   * version byte.
   *
   * @private
   * @param {number} versionByte
   * @returns {string}
   * @throws {ValidationError}
   */
  protected getType(versionByte: number): string {
    // tslint:disable-next-line:no-bitwise
    switch (versionByte & 120) {
      case 0:
        return 'P2PKH';
      case 8:
        return 'P2SH';
      default:
        throw new Error(
          'Invalid address type in version byte: ' + versionByte + '.'
        );
    }
  }

  protected validateChecksum(payload: Uint8Array, prefix: string): boolean {
    const prefixData = concat(prefixToUint5Array(prefix), new Uint8Array(1));
    const checksumData = concat(prefixData, payload);
    return this.polymod(checksumData).equals(0);
  }
}

export default BitcoinCashChecker;
