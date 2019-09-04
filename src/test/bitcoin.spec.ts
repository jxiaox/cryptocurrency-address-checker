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

    // segwit address
    expect(
      mainnetChecker.validate('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq')
    ).toBe(true);
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
    expect(mainnetChecker.validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef')).toBe(
      false
    );
    expect(
      mainnetChecker.validate('bd839e4f6fadb293ba580df5dea7814399989983')
    ).toBe(false);
    expect(mainnetChecker.validate('miCVC7QcY917Cz427qTBEUrvBzRapHrupc')).toBe(
      false
    );
    expect(mainnetChecker.validate('rrRmhfXzGBKbV4YHtbpxfA1ftEcry8AJaX')).toBe(
      false
    );

    // segwit address
    expect(
      mainnetChecker.validate('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P')
    ).toBe(false);
    expect(
      mainnetChecker.validate('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5')
    ).toBe(false);
    expect(mainnetChecker.validate('bc1rw5uspcuh')).toBe(false);
    expect(
      mainnetChecker.validate(
        'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90'
      )
    ).toBe(false);
  });
});
