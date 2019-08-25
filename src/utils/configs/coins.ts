/* tslint:disable:object-literal-sort-keys */
const config = {
  btc: {
    fullName: 'Bitcoin',
    symbol: 'BTC',

    algorithm: 'SHA256',
    addressTypes: ['00', '05'],
    addressReg: [/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/],
    segWitAddressReg: /^(bc|tb)1([023456789acdefghjklmnpqrstuvwxyz]+[023456789acdefghjklmnpqrstuvwxyz]{6})$/,
    addressExpectedLength: 25
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
    addressExpectedLength: 42 // remove <bitcoincash:>
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
    addressReg: [/^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/],
    addressExpectedLength: 25
  }
};

export default config;
