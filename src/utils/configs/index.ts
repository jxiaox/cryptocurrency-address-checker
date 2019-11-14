import { ICoinConfig } from '@/interfaces';
import coinsConfig from './coins';

/**
 * 根据币种名称或者单位获取配置
 *
 * @param {string} nameOrSymbol
 * @returns {(ICoinConfig | null)}
 */
async function getCoinConfig(
  nameOrSymbol: string
): Promise<ICoinConfig | null> {
  let result: ICoinConfig | null = null;
  const lowerName = nameOrSymbol.toLowerCase().trim();
  // symbol
  if (coinsConfig[lowerName]) {
    result = coinsConfig[lowerName];
  }
  // name
  const namedConfig = Object.values(coinsConfig).find(coinConfig => {
    return coinConfig.fullName.toLocaleLowerCase() === lowerName;
  });
  if (namedConfig) {
    result = namedConfig;
  }

  if (result && !result.checker) {
    result.checker = (await import(
      `../../modules/${result.fullName.toLocaleLowerCase()}`
    )).default;
  }

  return result;
}

export { coinsConfig, getCoinConfig };
