import { getCoinConfig } from '@/utils/configs';
import IChecker from './interfaces/checker.interface';

/**
 * 验证地址是否合法
 *
 * @param {string} address
 * @param {string} coin
 * @returns {Promise<boolean>}
 */
async function isValid(address: string, coin: string): Promise<boolean> {
  const checker = await getConfigChecker(coin);
  if (checker) {
    return checker.isValid(address) as boolean;
  }
  return false;
}

/**
 * 用正则预检查地址是否合法
 *
 * @param {string} address
 * @param {string} coin
 * @returns {Promise<boolean>}
 */
async function preCheck(address: string, coin: string): Promise<boolean> {
  const checker = await getConfigChecker(coin);
  if (checker) {
    return checker.preCheck(address) as boolean;
  }
  return false;
}

async function getConfigChecker(coin: string): Promise<IChecker | null> {
  const config = await getCoinConfig(coin);
  if (config) {
    const checker: IChecker = new config.checker();
    return checker;
  }
  return null;
}

export { isValid, preCheck };
