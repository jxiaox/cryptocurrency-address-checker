import BitcoinChecker from '@/modules/bitcoin';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new BitcoinChecker();
  it('should validated when use correct btc address', () => {
    expect(mainnetChecker.preCheck('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );
    expect(
      mainnetChecker.preCheck('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq')
    ).toBe(true);
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
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new BitcoinChecker();

  it('should validated when use correct btc address', () => {
    expect(mainnetChecker.validate('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
      true
    );
    expect(mainnetChecker.validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );
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
});
