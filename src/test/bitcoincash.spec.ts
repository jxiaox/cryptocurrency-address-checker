import BitcoinCashChecker from '@/modules/bitcoincash';
import { ADDRESS_TYPES, Network_type } from '@/utils/constants';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker(Network_type.Mainnet);
  // testnet
  // const testnetChecker = new BitcoinCashChecker(Network_type.Testnet);
  it('should validated when use correct btc address', () => {
    expect(mainnetChecker.preCheck('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );

    // expect(testnetChecker.preCheck('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')).toBe(
    //   true
    // );
  });

  it('should failed when use wrong btc address', () => {
    expect(
      mainnetChecker.preCheck('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty')
    ).toBe(false);
    expect(mainnetChecker.preCheck('bc1rw5uspcuh')).toBe(false);
    expect(
      mainnetChecker.preCheck(
        'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90'
      )
    ).toBe(false);
    expect(
      mainnetChecker.preCheck('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P')
    ).toBe(false);
  });
  it('should validated when use correct bch address', () => {
    expect(
      mainnetChecker.preCheck(
        'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqfnhks603')
    ).toBe(true);
  });
  // it('should validated when use correct bch address', () => {});
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker(Network_type.Mainnet);
  // // testnet
  // const testnetChecker = new BitcoinCashChecker(Network_type.Testnet);
  it('should validated when use correct btc address', () => {
    expect(mainnetChecker.validate('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
      true
    );
    expect(mainnetChecker.validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );

    // expect(testnetChecker.validate('mvppDXkpVQx6bNgAqKjkaFsH8FZAMM3gSC')).toBe(
    //   true
    // );
  });

  it('should failed when use wrong btc address', () => {
    expect(
      mainnetChecker.validate('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty')
    ).toBe(false);
    expect(mainnetChecker.validate('bc1rw5uspcuh')).toBe(false);
    expect(
      mainnetChecker.validate(
        'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90'
      )
    ).toBe(false);
    expect(
      mainnetChecker.validate('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P')
    ).toBe(false);
  });
  // it('should validated when use correct bch address', () => {});
  // it('should validated when use correct bch address', () => {});
});

describe('decode()', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker(Network_type.Mainnet);
  it('should decode address into correct info', () => {
    expect(
      mainnetChecker.decode(
        'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'
      )
    ).toEqual({
      hash: new Uint8Array([
        79,
        11,
        113,
        160,
        137,
        169,
        113,
        56,
        249,
        119,
        152,
        40,
        56,
        235,
        157,
        108,
        119,
        26,
        0,
        131
      ]),
      prefix: 'bitcoincash',
      type: 'P2SH'
    });
  });
});
