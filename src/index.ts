import IChecker from './interfaces/checker.interface';
import { ICoinCheckerInfo } from './interfaces/coin.interface';
import checkers, { getCoinConfig } from './modules';
import { Network_type } from './utils/constants';
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

/**
 * 通过地址猜测币种，返回币种配置
 *
 * @param {string} address
 * @returns {IChecker}
 */
function guess(address: string): ICoinCheckerInfo {
  let result: ICoinCheckerInfo | undefined;
  const arr = Object.entries(checkers);
  arr.forEach(([coin, checkClass]) => {
    if (result) {
      return null;
    }
    const checker: IChecker = new checkClass();
    if (checker) {
      const isValidCoin = checker.preCheck(address) as boolean;
      if (isValidCoin) {
        const config = getCoinConfig(coin)!;
        result = {
          hashAlgorithm: config.algorithm,
          isValid: isValidCoin,
          name: config.fullName,
          networkType: Network_type.Mainnet,
          symbol: config.symbol
        };
      }
    }
    return null;
  });
  if (result) {
    return result!;
  }
  throw new Error(`Invalid address`);
}

export { getConfigChecker as cryptoChecker, isValid, preCheck, guess };
