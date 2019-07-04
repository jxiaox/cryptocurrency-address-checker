import BitcoinChecker from '@/modules/bitcoin';
import { Network_type } from '@/utils/constants';

test('check address type', () => {
  // mainnet
  const mainnetChecker = new BitcoinChecker(Network_type.Mainnet);
  expect(
    mainnetChecker.getAddressType('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')
  ).toBe('00');
  expect(
    mainnetChecker.getAddressType('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')
  ).toBe('05');

  // testnet
  const testnetChecker = new BitcoinChecker(Network_type.Testnet);
  expect(
    testnetChecker.getAddressType('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')
  ).toBe('6f');
});

test('precheck address', () => {
  // mainnet
  const mainnetChecker = new BitcoinChecker(Network_type.Mainnet);
  expect(mainnetChecker.preCheck('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
    true
  );
  expect(mainnetChecker.preCheck('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
    true
  );

  // testnet
  const testnetChecker = new BitcoinChecker(Network_type.Testnet);
  expect(testnetChecker.preCheck('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')).toBe(
    true
  );
});

test('validate address', () => {
  // mainnet
  const mainnetChecker = new BitcoinChecker(Network_type.Mainnet);
  expect(mainnetChecker.validate('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
    true
  );
  expect(mainnetChecker.validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
    true
  );

  // testnet
  const testnetChecker = new BitcoinChecker(Network_type.Testnet);
  expect(testnetChecker.validate('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')).toBe(
    true
  );
});
