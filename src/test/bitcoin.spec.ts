import BitcoinChecker from '@/modules/bitcoin';

test('Jest-TypeScript 尝试运行', () => {
  // mainnet
  expect(
    BitcoinChecker.getAddressType('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')
  ).toBe('00'); // Pass
  // expect(
  //   BitcoinChecker.getAddressType('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')
  // ).toBe('00');
});
