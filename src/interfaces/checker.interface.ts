export default interface IChecker {
  /**
   * 验证地址是否合法
   * @param address crypto currency address
   */
  isValid(address: string): boolean;
}
