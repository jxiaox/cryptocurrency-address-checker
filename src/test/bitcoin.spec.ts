import BitcoinChecker from '@/modules/bitcoin';

test('Jest-TypeScript 尝试运行', () => {
  BitcoinChecker.validate('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y');
  expect(1 + 1).toBe(2); // Pass
});
