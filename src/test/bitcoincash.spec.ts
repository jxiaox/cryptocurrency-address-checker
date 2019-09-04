import BitcoinCashChecker from '@/modules/bitcoincash';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker();
  it('should validated when use correct btc address', () => {
    expect(mainnetChecker.preCheck('1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );
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
      mainnetChecker.preCheck(
        'bitcoincash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'bitcoincash:qqq3728yw0y47sqn6l2na30mcw6zm78dzqre909m2r'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'bitcoincash:ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'bitcoincash:pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'bitcoincash:pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqfnhks603')
    ).toBe(true);
  });
  it('should validated when use wrong bch address', () => {
    // should fail when the version byte is invalid
    expect(
      mainnetChecker.preCheck(
        'bitcoincash:zpm2qsznhks23z7629mms6s4cwef74vcwvrqekrq9w'
      )
    ).toBe(false);
    // should fail when given an address with mixed letter case
    expect(
      mainnetChecker.preCheck(
        'bitcoincash:QPM2QSZNHKS23Z7629MMS6s4cwef74vcwvY22GDX6A'
      )
    ).toBe(false);
    expect(
      mainnetChecker.preCheck(
        'BitCOINcash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a'
      )
    ).toBe(false);
    expect(
      mainnetChecker.preCheck(
        'BitCOINcash:QPM2QSZNHKS23Z7629MMS6s4cwef74vcwvY22GDX6A'
      )
    ).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker();

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
  // it('should validated when use correct bch address', () => {});
  // it('should validated when use correct bch address', () => {});
});

describe('decode()', () => {
  // mainnet
  const mainnetChecker = new BitcoinCashChecker();
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
