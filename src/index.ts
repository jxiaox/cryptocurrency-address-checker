import IChecker from './interfaces/checker.interface';
import { getCoinConfig } from './modules';

/**
 * 验证地址是否合法
 *
 * @param {string} address
 * @param {string} coin
 * @returns {boolean}
 */
function isValid(address: string, coin: string): boolean {
  const checker = getConfigChecker(coin);
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
 * @returns {boolean}
 */
function preCheck(address: string, coin: string): boolean {
  const checker = getConfigChecker(coin);
  if (checker) {
    return checker.preCheck(address) as boolean;
  }
  return false;
}

/**
 * 获取配置
 *
 * @param {string} coin
 * @returns {IChecker}
 */
function getConfigChecker(coin: string): IChecker {
  const config = getCoinConfig(coin);
  if (config) {
    const checker: IChecker = new config.checker();
    return checker;
  }
  throw new Error(
    `No ${coin} config or checker, please make sure you enter the correct coin name.`
  );
}

export { getConfigChecker as cryptoChecker, isValid, preCheck };
