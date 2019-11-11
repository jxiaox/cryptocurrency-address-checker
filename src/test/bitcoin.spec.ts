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
    expect(mainnetChecker.isValid('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
      true
    );
    expect(mainnetChecker.isValid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );

    // segwit address
    expect(
      mainnetChecker.isValid('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq')
    ).toBe(true);
  });

  it('should failed when use wrong btc address', () => {
    expect(
      mainnetChecker.isValid('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty')
    ).toBe(false);
    expect(mainnetChecker.isValid('bc1rw5uspcuh')).toBe(false);
    expect(
      mainnetChecker.isValid(
        'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90'
      )
    ).toBe(false);
    expect(mainnetChecker.isValid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef')).toBe(
      false
    );
    expect(
      mainnetChecker.isValid('bd839e4f6fadb293ba580df5dea7814399989983')
    ).toBe(false);
    expect(mainnetChecker.isValid('miCVC7QcY917Cz427qTBEUrvBzRapHrupc')).toBe(
      false
    );
    expect(mainnetChecker.isValid('rrRmhfXzGBKbV4YHtbpxfA1ftEcry8AJaX')).toBe(
      false
    );

    // segwit address
    expect(mainnetChecker.isValid('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P')).toBe(
      false
    );
    expect(
      mainnetChecker.isValid('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5')
    ).toBe(false);
    expect(mainnetChecker.isValid('bc1rw5uspcuh')).toBe(false);
    expect(
      mainnetChecker.isValid(
        'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90'
      )
    ).toBe(false);
  });
});
