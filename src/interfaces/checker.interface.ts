export default interface IChecker {
  /**
   * 验证地址是否合法
   * @param address crypto coin address
   */
  validate(address: string): boolean;
}
