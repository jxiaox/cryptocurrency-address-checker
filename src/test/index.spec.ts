import { isValid } from '@/index';

describe('isValid()', () => {
  // mainnet
  it('should validated when use correct btc address', async () => {
    expect(await isValid('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs', 'btc')).toBe(
      true
    );
    expect(await isValid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'btc')).toBe(
      true
    );
    expect(
      await isValid('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', 'btc')
    ).toBe(true);
  });

  it('should failed when use wrong btc address', async () => {
    expect(
      await isValid('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty', 'btc')
    ).toBe(false);
    expect(await isValid('bc1rw5uspcuh', 'btc')).toBe(false);
    expect(
      await isValid(
        'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90',
        'btc'
      )
    ).toBe(false);
    expect(await isValid('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P', 'btc')).toBe(
      false
    );
  });
});
