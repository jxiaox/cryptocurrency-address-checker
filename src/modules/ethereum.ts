import IChecker from '@/interfaces/checker.interface';
import ICoin from '@/interfaces/coin.interface';
import { coinsConfig } from '@/utils/configs';
import { Network_type } from '@/utils/constants';
import web3 from 'web3';

class EtherChecker implements IChecker, ICoin {
  public name: string;
  public symbol: string;
  public hashAlgorithm: string;
  public networkType: Network_type;

  constructor(networkType: Network_type = Network_type.Mainnet) {
    this.networkType = networkType;
    this.hashAlgorithm = coinsConfig.eth.algorithm;
    this.name = coinsConfig.eth.fullName;
    this.symbol = coinsConfig.eth.symbol;
  }

  public validate(address: string): boolean {
    // check address regex or checksum address
    return web3.utils.isAddress(address);
  }
}

export default EtherChecker;
