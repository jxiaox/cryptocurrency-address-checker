<h1 align="center">Welcome to cryptocurrency-address-checker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/github/package-json/v/jxiaox/cryptocurrency-address-checker" />
  <img src="https://img.shields.io/badge/node-%3E%3D8.9-blue.svg" />
  <a href="https://github.com/jxiaox/cryptocurrency-address-checker#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jxiaox/cryptocurrency-address-checker/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jxiaox/cryptocurrency-address-checker/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jxiaox/cryptocurrency-address-checker" />
  </a>
  <a href="https://circleci.com/gh/jxiaox/cryptocurrency-address-checker
" target="_blank">
    <img alt="circleci" src="https://img.shields.io/circleci/build/github/jxiaox/cryptocurrency-address-checker" />
  </a>
  <a href="https://codecov.io/gh/jxiaox/cryptocurrency-address-checker">
  <img src="https://codecov.io/gh/jxiaox/cryptocurrency-address-checker/branch/master/graph/badge.svg" />
</a>

</p>

> A typescript library for validation bitcoin and most of altcoins address.

### 🏠 [Homepage](https://github.com/jxiaox/cryptocurrency-address-checker#readme)

## Prerequisites

- node >=8.9

## Install

```sh
yarn
```

## Usage

```sh
yarn doc
```

## Run tests

```sh
yarn test
```

## Supported crypto currencies

- Bitcoin/BTC
- Bitcoin Cash/BCH
- Ethereum/ETH
- Litecoin/LTC
- Ripple/XRP
- Stellar Lumens/XLM
- Cardano/ADA
- Tron/TRX
- Monero/XMR
- IOTA
- Dash/DASH
- Cosmos/ATOM
- NEO
- Dogecoin/DOGE
- Zcash/ZEC
- NEM/XEM
- V Systems/VSYS
- Decred/DCR
- Qtum/QTUM
- Nano/NANO
- Bytom/BTM

### API

```typescript
/**
 * Checks if the given string is an address
 *
 * @param {string} address
 * @param {string} coin
 * @returns {boolean}
 */
function isValid(address: string, coin: string): boolean;

/**
 * Use regex to pre-check the address is a legal address type.
 *
 * @param {string} address
 * @param {string} coin
 * @returns {boolean}
 */
function preCheck(address: string, coin: string): boolean;

/**
 * Get the checker
 *
 * @param {string} coin
 * @returns {IChecker}
 */
function cryptoChecker(coin: string): IChecker;

interface IChecker {
  isValid(address: string): boolean;
  preCheck(address: string): boolean;
}
```

### Examples

#### Typescript

```typescript
import { isValid } from 'cryptocurrency-address-checker';

const valid: boolean = isValid('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if (valid) {
  console.log('This is a valid address');
} else {
  console.log('Address INVALID');
}
```

#### Javascript

```javascript
import { isValid, preCheck } from 'cryptocurrency-address-checker';

var valid = isValid('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if (valid) console.log('This is a valid BTC address');
else console.log('BTC Address INVALID');

var valid = preCheck('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahb6b', 'dash');
if (valid) console.log('This is a valid DASH address');
else console.log('DASH Address INVALID');
```

#### Browser

```html
<script src="cryptocurrency-address-checker.min.js"></script>
```

```javascript
// CAChecker is exposed as a global (window.CAChecker)
var valid = CAChecker.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if (valid) console.log('This is a valid address');
else console.log('Address INVALID');
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jxiaox/cryptocurrency-address-checker/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [jxiaox](https://github.com/jxiaox).<br />
This project is [MIT](https://github.com/jxiaox/cryptocurrency-address-checker/blob/master/LICENSE) licensed.
