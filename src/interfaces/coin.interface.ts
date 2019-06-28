export default interface ICoin {
  name: string;
  symbol: string;
  algorithm: string;
  /**
   *
   * @param address crypto coin address
   */
  validate(address: string): boolean;
}
