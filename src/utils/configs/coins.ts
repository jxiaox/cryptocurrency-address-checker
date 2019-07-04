import { Network_type } from '@/utils/constants';
const config = {
  btc: {
    fullName: 'Bitcoin',
    symbol: 'BTC',
    algorithm: 'SHA256',
    addressTypes: {
      [Network_type.Mainnet]: ['00', '05'],
      [Network_type.Testnet]: ['6f', 'c4']
    },
    hashrateScale: 'T',
    biggestHashrateScale: 'P',
    hashrateUnit: 'H/s',
    explorer: 'https://btc.com',
    blockHeight: '/',
    blockHash: '/',
    address: '/',
    txHash: '/'
  }
};

export default config;
