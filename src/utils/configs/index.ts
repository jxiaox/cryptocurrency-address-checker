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
    return coinConfig.fullName.toLowerCase() === lowerName;
  });
  if (namedConfig) {
    result = namedConfig;
  }

  if (result) {
    if (!result.checker || typeof result.checker === 'string') {
      const moduleName = result.checker || result.fullName;
      result.checker = (await import(
        `../../modules/${moduleName.toLowerCase()}`
      )).default;
    }
  }

  return result;
}

export { coinsConfig, getCoinConfig };
