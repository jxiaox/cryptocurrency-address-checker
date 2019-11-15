import { cnBase58 } from '@xmr-core/xmr-b58';
import {
  ADDRESS_CHECKSUM_SIZE,
  INTEGRATED_ID_SIZE
} from '@xmr-core/xmr-constants';
import { cn_fast_hash } from '@xmr-core/xmr-fast-hash';
// tslint:disable-next-line:no-implicit-dependencies
import { encode_varint } from '@xmr-core/xmr-varint';
import CoinChecker from '../interfaces/coinChecker';
import { Network_type } from '../utils/constants';

const __MAINNET_CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 18;
const __MAINNET_CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX = 19;
const __MAINNET_CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX = 42;

class XMRChecker extends CoinChecker {
  constructor(networkType: Network_type = Network_type.Mainnet) {
    super('xmr', networkType);
  }

  /**
   * 验证checksum
   *
   * @protected
   * @param {string} address
   * @returns {boolean}
   * @memberof XrpChecker
   */
  protected verifyChecksum(address: string): boolean {
    try {
      let dec = cnBase58.decode(address);
      const expectedPrefix = encode_varint(
        __MAINNET_CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX
      );
      const expectedPrefixInt = encode_varint(
        __MAINNET_CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX
      );
      const expectedPrefixSub = encode_varint(
        __MAINNET_CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX
      );
      const prefix = dec.slice(0, expectedPrefix.length);
      if (
        prefix !== expectedPrefix &&
        prefix !== expectedPrefixInt &&
        prefix !== expectedPrefixSub
      ) {
        throw Error('Invalid address prefix');
      }
      dec = dec.slice(expectedPrefix.length);
      const spend = dec.slice(0, 64);
      const view = dec.slice(64, 128);
      let checksum;
      let expectedChecksum;
      let intPaymentId;

      if (prefix === expectedPrefixInt) {
        intPaymentId = dec.slice(128, 128 + INTEGRATED_ID_SIZE * 2);
        checksum = dec.slice(
          128 + INTEGRATED_ID_SIZE * 2,
          128 + INTEGRATED_ID_SIZE * 2 + ADDRESS_CHECKSUM_SIZE * 2
        );
        expectedChecksum = cn_fast_hash(
          prefix + spend + view + intPaymentId
        ).slice(0, ADDRESS_CHECKSUM_SIZE * 2);
      } else {
        checksum = dec.slice(128, 128 + ADDRESS_CHECKSUM_SIZE * 2);
        expectedChecksum = cn_fast_hash(prefix + spend + view).slice(
          0,
          ADDRESS_CHECKSUM_SIZE * 2
        );
      }
      if (checksum !== expectedChecksum) {
        throw Error('Invalid checksum');
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default XMRChecker;
