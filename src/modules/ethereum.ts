import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import * as Utils from 'web3-utils';

class EthChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.eth.algorithm;
    this.name = coinsConfig.eth.fullName;
    this.symbol = coinsConfig.eth.symbol;
  }

  /**
   * Checks if the given string is an address
   *
   * @method isValid
   *
   * @param {String} address the given HEX address
   *
   * @param {Number} chainId to define checksum behavior
   *
   * @returns {Boolean}
   */
  public isValid(address: string, chainId?: number): boolean {
    // check address regex or checksum address
    return Utils.isAddress(address, chainId);
  }

  /**
   * Checks if the given string is a checksummed address
   *
   * @method checkAddressChecksum
   *
   * @param {String} address the given HEX address
   *
   * @param {number} chain where checksummed address should be valid.
   *
   * @returns {Boolean}
   */

  public checkAddressChecksum(address: string, chainId?: number): boolean {
    return Utils.checkAddressChecksum(address, chainId);
  }

  /**
   * Converts to a checksum address
   *
   * @method toChecksumAddress
   *
   * @param {string} address the given HEX address
   *
   * @param {number} chain where checksummed address should be valid.
   *
   * @returns {string} address with checksum applied.
   */
  public toChecksumAddress(address: string, chainId?: number): string {
    return Utils.toChecksumAddress(address, chainId);
  }
}

export default EthChecker;
