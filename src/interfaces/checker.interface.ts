export default interface IChecker {
  /**
   * 验证地址是否合法
   * @param address crypto currency address
   */
  isValid(address: string): boolean;

  /**
   * 用正则预检查地址是否合法
   *
   * @param {string} address
   * @returns {boolean}
   * @memberof IChecker
   */
  preCheck(address: string): boolean;
}
