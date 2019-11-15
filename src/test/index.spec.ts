import { isValid, preCheck } from '@/index';

describe('isValid()', () => {
  // mainnet
  it('should validated when use correct btc address', async () => {
    expect(await isValid('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs', 'btc')).toBe(
      true
    );
    expect(await isValid('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs', 'bitcoin')).toBe(
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
    expect(
      await isValid('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty', 'bitcoin')
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

describe('preCheck()', () => {
  // mainnet
  it('should validated when use correct btc address', async () => {
    expect(await preCheck('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs', 'btc')).toBe(
      true
    );
    expect(
      await preCheck('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs', 'bitcoin')
    ).toBe(true);
    expect(await preCheck('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'btc')).toBe(
      true
    );
    expect(
      await preCheck('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', 'btc')
    ).toBe(true);
  });

  it('should failed when use wrong btc address', async () => {
    expect(
      await preCheck('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty', 'btc')
    ).toBe(false);
    expect(
      await preCheck('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty', 'bitcoin')
    ).toBe(false);
    expect(await preCheck('bc1rw5uspcuh', 'btc')).toBe(false);
    expect(
      await preCheck(
        'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90',
        'btc'
      )
    ).toBe(false);
    expect(await preCheck('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P', 'btc')).toBe(
      false
    );
  });

  it('should validated when use correct bch address', async () => {
    expect(
      await preCheck(
        'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g',
        'bch'
      )
    ).toBe(true);
    expect(
      await preCheck(
        'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g',
        'bitcoin cash'
      )
    ).toBe(true);
    expect(
      await preCheck(
        'bitcoincash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy',
        'bch'
      )
    ).toBe(true);
    expect(
      await preCheck(
        'bitcoincash:qqq3728yw0y47sqn6l2na30mcw6zm78dzqre909m2r',
        'bch'
      )
    ).toBe(true);
    expect(
      await preCheck(
        'bitcoincash:ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq',
        'bch'
      )
    ).toBe(true);
    expect(
      await preCheck(
        'bitcoincash:pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e',
        'bch'
      )
    ).toBe(true);
    expect(
      await preCheck(
        'bitcoincash:pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37',
        'bch'
      )
    ).toBe(true);
    expect(
      await preCheck('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqfnhks603', 'bch')
    ).toBe(true);
  });
  it('should validated when use wrong bch address', async () => {
    // should fail when the version byte is invalid
    expect(
      await preCheck(
        'bitcoincash:zpm2qsznhks23z7629mms6s4cwef74vcwvrqekrq9w',
        'bch'
      )
    ).toBe(false);
    expect(
      await preCheck(
        'bitcoincash:zpm2qsznhks23z7629mms6s4cwef74vcwvrqekrq9w',
        'bitcoin cash'
      )
    ).toBe(false);
    // should fail when given an address with mixed letter case
    expect(
      await preCheck(
        'bitcoincash:QPM2QSZNHKS23Z7629MMS6s4cwef74vcwvY22GDX6A',
        'bch'
      )
    ).toBe(false);
    expect(
      await preCheck(
        'BitCOINcash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
        'bch'
      )
    ).toBe(false);
    expect(
      await preCheck(
        'BitCOINcash:QPM2QSZNHKS23Z7629MMS6s4cwef74vcwvY22GDX6A',
        'bch'
      )
    ).toBe(false);
  });
});
