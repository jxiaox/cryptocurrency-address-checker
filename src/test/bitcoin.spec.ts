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
  expect(
    testnetChecker.getAddressType('2MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc')
  ).toBe('c4');
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
  expect(
    mainnetChecker.preCheck('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty')
  ).toBe(false);
  expect(mainnetChecker.preCheck('bc1rw5uspcuh')).toBe(false);
  expect(
    mainnetChecker.preCheck(
      'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90'
    )
  ).toBe(false);
  expect(mainnetChecker.preCheck('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P')).toBe(
    false
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

  expect(
    mainnetChecker.preCheck('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty')
  ).toBe(false);
  expect(mainnetChecker.preCheck('bc1rw5uspcuh')).toBe(false);
  expect(
    mainnetChecker.preCheck(
      'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90'
    )
  ).toBe(false);
  expect(mainnetChecker.preCheck('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P')).toBe(
    false
  );

  // testnet
  const testnetChecker = new BitcoinChecker(Network_type.Testnet);
  expect(testnetChecker.validate('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')).toBe(
    true
  );
});
