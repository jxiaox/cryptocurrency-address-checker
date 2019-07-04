import BitcoinChecker from '@/modules/bitcoin';

test('check address type', () => {
  // mainnet
  expect(
    BitcoinChecker.getAddressType('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')
  ).toBe('00');
  expect(
    BitcoinChecker.getAddressType('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')
  ).toBe('05');

  // testnet
  expect(
    BitcoinChecker.getAddressType('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')
  ).toBe('6f');
});
