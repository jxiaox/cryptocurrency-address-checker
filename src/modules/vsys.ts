import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { blake2b, bs58, keccak256 } from '@/lib/hash';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';

class VSYSChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.vsys.algorithm;
    this.name = coinsConfig.vsys.fullName;
    this.symbol = coinsConfig.vsys.symbol;
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
    return coinsConfig.vsys.addressReg.some(reg => reg.test(address));
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof VSYSChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      const bytes = bs58.decode(address);
      const computedChecksum = keccak256.array(blake2b(bytes.slice(0, -4)));
      const checksum = bytes.slice(-4);
      for (let i = 0; i < 4; i++) {
        if (computedChecksum[i] !== checksum[i]) {
          return false;
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default VSYSChecker;
