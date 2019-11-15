import CoinChecker from '@/interfaces/coinChecker';
import { Network_type } from '@/utils/constants';
import * as Utils from 'web3-utils';

class EthChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('eth', networkType);
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

  public preCheck(address: string): boolean {
    // check address regex or checksum address
    return Utils.isAddress(address);
  }
}

export default EthChecker;
