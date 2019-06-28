export default interface IChecker {
  /**
   *
   * @param address crypto coin address
   */
  validate(address: string): boolean;
}
