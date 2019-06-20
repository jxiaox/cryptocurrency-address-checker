export default interface IChecker {
  validate(address: string, coin: string): boolean;
}
