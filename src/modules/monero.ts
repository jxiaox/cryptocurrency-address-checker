import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { bs58, sha256 } from '@/lib/hash';
import { toHex } from '@/utils';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';

class XMRChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.xmr.algorithm;
    this.name = coinsConfig.xmr.fullName;
    this.symbol = coinsConfig.xmr.symbol;
  }

  /**
   * Checks if the given string is an address
   *
   * @method validate
   *
   * @param {String} address the given HEX address
   *
   * @returns {Boolean}
   */
  public validate(address: string): boolean {
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
    return coinsConfig.xmr.addressReg.some(reg => reg.test(address));
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof XMRChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const bytes = bs58.decode(address);
      const computedChecksum = sha256(
        sha256(bytes.slice(0, -4), 'buffer')
      ).substr(0, 8);
      const checksum = toHex(bytes.slice(-4));
      return computedChecksum === checksum;
    } catch (error) {
      return false;
    }
  }
}

export default XMRChecker;