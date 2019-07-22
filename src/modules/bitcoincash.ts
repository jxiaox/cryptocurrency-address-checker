import { base32 } from '@/lib/hash';
import { concat, prefixToUint5Array, toBuffer, toHex } from '@/utils';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import bigInt from 'big-integer';
import BitcoinChecker from './bitcoin';

class BitcoinCashChecker extends BitcoinChecker {
  protected bitcoinChecker: BitcoinChecker;
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
    var pieces = address.toLowerCase().split(':');
    if (pieces.length !== 2) {
      throw new Error('Missing prefix: ' + address + '.');
    }
    const prefix = pieces[0];
    const payload = base32.decode(pieces[1]);

    // const addressDecode = base32.decode(address);
    // base32 encoding
    const decoded: Buffer = toBuffer(payload);
    if (this.isLegalAddress(address, decoded)) {
      const decodedLength: number = decoded.length;

      const decodedChecksum: string = toHex(
        decoded.slice(decodedLength - 8, decodedLength)
      );

      const payloadHex: Buffer = decoded.slice(0, decodedLength - 8);
      console.log(payloadHex, decodedChecksum);
      if (this.validateChecksum(payload, prefix)) {
        throw new Error('Method not implemented.');
      }
      // const payloadChecksum: string = this.getChecksum(payloadHex, '');
      // if (decodedChecksum === payloadChecksum) {
      //   return toHex(decoded.slice(0, decodedLength - 24));
      // }
    }
    return null;
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
   * Computes a checksum from the given input data as specified for the CashAddr
   * format: https://github.com/Bitcoin-UAHF/spec/blob/master/cashaddr.md.
   *
   * @private
   * @param {Uint8Array} data Array of 5-bit integers over which the checksum is to be computed.
   * @returns {BigInteger}
   */
  polymod(data: Uint8Array): bigInt.BigInteger {
    let GENERATOR = [
      0x98f2bc8e61,
      0x79b76d99e2,
      0xf33e5fb3c4,
      0xae2eabe2a8,
      0x1e4f43e470
    ];
    let checksum = bigInt(1);
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

  protected validateChecksum(payload: Uint8Array, prefix: string): boolean {
    const prefixData = concat(prefixToUint5Array(prefix), new Uint8Array(1));
    const checksumData = concat(prefixData, payload);
    return this.polymod(checksumData).equals(0);
  }
}

export default BitcoinCashChecker;
