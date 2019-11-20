import { ICoinConfig } from '../interfaces';
import coinsConfig from '../utils/configs/coins';
import bitcoin from './bitcoin';
import bitcoincash from './bitcoincash';
import bytom from './bytom';
import cardano from './cardano';
import cosmos from './cosmos';
import dash from './dash';
import decred from './decred';
import doge from './doge';
import ethereum from './ethereum';
import iota from './iota';
import litecoin from './litecoin';
import monero from './monero';
import nano from './nano';
import nem from './nem';
import neo from './neo';
import qtum from './qtum';
import ripple from './ripple';
import stellar from './stellar';
import tron from './tron';
import vsys from './vsys';
import zcash from './zcash';
const checkers: { [key: string]: any } = {
  bitcoin,
  bitcoincash,
  bytom,
  cardano,
  cosmos,
  dash,
  decred,
  doge,
  ethereum,
  iota,
  litecoin,
  monero,
  nano,
  nem,
  neo,
  qtum,
  ripple,
  stellar,
  tron,
  vsys,
  zcash
};
export default checkers;

/**
 * 根据币种名称或者单位获取配置
 *
 * @param {string} nameOrSymbol
 * @returns {(ICoinConfig | null)}
 */
function getCoinConfig(nameOrSymbol: string): ICoinConfig | null {
  let result: ICoinConfig | null = null;
  const lowerName = nameOrSymbol.toLowerCase().trim();
  // symbol
  if (coinsConfig[lowerName]) {
    result = coinsConfig[lowerName];
  }
  // name
  const namedConfig = Object.values(coinsConfig).find(coinConfig => {
    return coinConfig.fullName.toLowerCase() === lowerName;
  });
  if (namedConfig) {
    result = namedConfig;
  }

  if (result) {
    if (!result.checker || typeof result.checker === 'string') {
      const moduleName = result.checker || result.fullName;
      result.checker = checkers[moduleName.toLowerCase()];
    }
  }

  return result;
}
export { getCoinConfig };
