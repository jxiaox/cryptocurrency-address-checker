import BitcoinChecker from '@/modules/bitcoin';

test('Jest-TypeScript 尝试运行', () => {
  BitcoinChecker.validate('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs');
  expect(1 + 1).toBe(2); // Pass
});
