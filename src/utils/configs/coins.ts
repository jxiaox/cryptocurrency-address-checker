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
    addressReg: {
      [Network_type.Mainnet]: /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}/,
      [Network_type.Testnet]: /^[cmnt29][a-km-zA-HJ-NP-Z1-9]{33}/
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
