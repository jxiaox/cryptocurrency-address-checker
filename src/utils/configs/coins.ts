/* tslint:disable:object-literal-sort-keys */
import { ICoinConfigType } from '../../interfaces';

const coinsConfig: ICoinConfigType = {
  btc: {
    fullName: 'Bitcoin',
    symbol: 'BTC',

    algorithm: 'SHA256',
    addressTypes: ['00', '05'],
    addressReg: [/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/],
    segWitAddressReg: /^(bc|tb)1([023456789acdefghjklmnpqrstuvwxyz]+[023456789acdefghjklmnpqrstuvwxyz]{6})$/
  },
  bch: {
    fullName: 'Bitcoin Cash',
    symbol: 'BCH',
    algorithm: 'SHA256',
    addressTypes: ['00', '05'],
    addressReg: [
      /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}/,
      /^((bitcoincash:)?(q|p)[a-z0-9]{41})/
    ],
    checker: 'bitcoincash'
  },
  eth: {
    fullName: 'Ethereum',
    symbol: 'ETH',
    algorithm: 'Ethash',
    addressReg: [/^0x[a-fA-F0-9]{40}$/]
  },
  ltc: {
    fullName: 'Litecoin',
    symbol: 'LTC',
    algorithm: 'SHA256',
    addressTypes: ['30', '05', '32'],
    addressReg: [/^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/]
  },
  xrp: {
    fullName: 'Ripple',
    symbol: 'XRP',
    algorithm: 'The Ripple Protocol consensus algorithm (RPCA)',
    addressReg: [
      /^r[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]{27,35}$/
    ]
  },
  xlm: {
    fullName: 'Stellar Lumens',
    symbol: 'XLM',
    algorithm: 'Federated Byzantine Agreement (FBA)',
    addressReg: [/^(G)[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{55}$/],
    checker: 'stellar'
  },
  ada: {
    fullName: 'Cardano',
    symbol: 'ADA',
    algorithm: 'Ouroboros',
    addressReg: [/^(A|D|4)\w{20,}$/]
  },
  trx: {
    fullName: 'Tron',
    symbol: 'TRX',
    algorithm: 'Tpos',
    addressReg: [/^T\w{33}$/]
  },
  xmr: {
    fullName: 'Monero',
    symbol: 'XMR',
    algorithm: 'CryptoNight',
    addressReg: [/^4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/]
  },
  iota: {
    fullName: 'IOTA',
    symbol: 'IOTA',
    algorithm: 'Tangle',
    addressReg: [/^\w{90}$/]
  },
  dash: {
    fullName: 'Dash',
    symbol: 'DASH',
    algorithm: 'X11',
    addressReg: [/^X[1-9A-HJ-NP-Za-km-z]{33}$/],
    addressTypes: ['4c', '10']
  },
  atom: {
    fullName: 'Cosmos',
    symbol: 'ATOM',
    algorithm: 'Tendermint',
    addressReg: [/^cosmos1\w{38}$/]
  },
  neo: {
    fullName: 'NEO',
    symbol: 'NEO',
    algorithm: 'SHA256',
    addressReg: [/^A[0-9a-zA-Z]{33}$/]
  },
  doge: {
    fullName: 'Dogecoin',
    symbol: 'DOGE',
    algorithm: 'Scrypt',
    addressReg: [/^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/],
    checker: 'doge'
  },
  zec: {
    fullName: 'Zcash',
    symbol: 'ZEC',
    algorithm: 'Equihash',
    addressReg: [/^t1[a-zA-Z0-9]{33}$/]
  },
  xem: {
    fullName: 'NEM',
    symbol: 'XEM',
    algorithm: 'POI',
    addressReg: [/^n\w{5}-\w{6}-\w{6}-\w{6}-\w{6}-\w{6}-\w{4}$/]
  },
  vsys: {
    fullName: 'V Systems',
    symbol: 'VSYS',
    algorithm: 'SPoS',
    addressReg: [/^A\w{34}$/],
    checker: 'vsys'
  },
  dcr: {
    fullName: 'Decred',
    symbol: 'DCR',
    algorithm: 'BLAKE256 R14',
    addressReg: [/^D[kseSc]\w{33}$/]
  },
  qtum: {
    fullName: 'Qtum',
    symbol: 'QTUM',
    algorithm: 'POS 3.0',
    addressReg: [/^Q\w{33}$/]
  },
  nano: {
    fullName: 'Nano',
    symbol: 'NANO',
    algorithm: 'Directed Acyclic Graph (DAG)',
    addressReg: [/^(nano|xrb)_[13]\w{51}\w{8}$/]
  },
  btm: {
    fullName: 'Bytom',
    symbol: 'BTM',
    algorithm: 'Tensority',
    addressReg: [/^bm1q\w{38}$/]
  }
};

export default coinsConfig;
