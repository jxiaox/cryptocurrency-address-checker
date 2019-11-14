import { getCoinConfig } from '@/utils/configs';
import IChecker from './interfaces/checker.interface';

async function isValid(address: string, coin: string): Promise<boolean> {
  const config = await getCoinConfig(coin);
  if (config) {
    const checker: IChecker = new config.checker();
    return checker.isValid(address) as boolean;
  }
  return false;
}

export { isValid };
