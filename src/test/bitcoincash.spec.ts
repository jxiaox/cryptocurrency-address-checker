import BitcoinCashChecker from '@/modules/bitcoincash';
import { Network_type } from '@/utils/constants';

const NETWORKS = ['bitcoincash', 'bchtest', 'bchreg'];

const ADDRESS_TYPES = ['P2PKH', 'P2SH'];

test('check address type', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker(Network_type.Mainnet);
  expect(
    mainnetChecker.getAddressType('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')
  ).toBe('00');
  expect(
    mainnetChecker.getAddressType('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')
  ).toBe('05');
  expect(
    mainnetChecker.getAddressType(
      'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'
    )
  ).toBe(ADDRESS_TYPES[0]);
});

test('should fail when the version byte is invalid', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker(Network_type.Mainnet);
  try {
    mainnetChecker.getAddressType(
      'bitcoincash:zpm2qsznhks23z7629mms6s4cwef74vcwvrqekrq9w'
    );
  } catch (error) {
    expect(error.message).toMatch(/Invalid address type/);
  }
  try {
    mainnetChecker.getAddressType(
      'BitCOINcash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a'
    );
  } catch (error) {
    expect(error.message).toMatch(/Invalid address/);
  }
  try {
    mainnetChecker.getAddressType(
      'BitCOINcash:QPM2QSZNHKS23Z7629MMS6s4cwef74vcwvY22GDX6A'
    );
  } catch (error) {
    expect(error.message).toMatch(/Invalid address/);
  }
});

test('precheck address', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker(Network_type.Mainnet);
  expect(mainnetChecker.preCheck('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
    true
  );
  expect(mainnetChecker.preCheck('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
    true
  );
  expect(
    mainnetChecker.preCheck(
      'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'
    )
  ).toBe(true);
  expect(
    mainnetChecker.preCheck('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqfnhks603')
  ).toBe(true);
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
  const testnetChecker = new BitcoinCashChecker(Network_type.Testnet);
  expect(testnetChecker.preCheck('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')).toBe(
    true
  );
});

test('validate address', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker(Network_type.Mainnet);
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
  const testnetChecker = new BitcoinCashChecker(Network_type.Testnet);
  expect(testnetChecker.validate('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')).toBe(
    true
  );
});
