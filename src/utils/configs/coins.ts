import { Network_type } from '@/utils/constants';
/* tslint:disable:object-literal-sort-keys */
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
      [Network_type.Mainnet]: [/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}/],
      [Network_type.Testnet]: [/^[cmnt29][a-km-zA-HJ-NP-Z1-9]{33}/]
    },
    addressExpectedLength: 25
  },
  bch: {
    fullName: 'Bitcoin Cash',
    symbol: 'BCH',
    algorithm: 'SHA256',
    addressTypes: {
      [Network_type.Mainnet]: ['00', '05'],
      [Network_type.Testnet]: ['6f', 'c4']
    },
    addressReg: {
      [Network_type.Mainnet]: [
        /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}/,
        /^((bitcoincash:)?(q|p)[a-z0-9]{41})/
      ],
      [Network_type.Testnet]: [
        /^[cmnt29][a-km-zA-HJ-NP-Z1-9]{33}/,
        /^((bchtest:)?(q|p)[a-z0-9]{41})/
      ]
    },
    addressExpectedLength: 42 // remove <bitcoincash:>
  },
  eth: {
    fullName: 'Ethereum',
    symbol: 'ETH',
    algorithm: 'Ethash'
  },
  ltc: {
    fullName: 'Litecoin',
    symbol: 'LTC',

    algorithm: 'SHA256',
    addressTypes: ['30', '05', '32'],
    addressReg: [/^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/],
    addressExpectedLength: 25
  }
};

export default config;
