import ZcashChecker from '@/modules/zcash';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new ZcashChecker();
  it('should validated when use correct zcash address', () => {
    expect(mainnetChecker.preCheck('t1TS7ytTTq6vreSTuNkdqosMiBwh79KkBAd')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('t1PdVEJq7EDPhEkUS4jGBXhA8SfewenKcBb')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('t1KVcK1PEFHRjzJTA3oeXA82tiUGj5V72Cb')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('t1Lz3716E9ReWJABhVkYUpenSDHMis9YXjk')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('t1KVcK1PEFHRjzJTA3oeXA82tiUGj5V72Cb')).toBe(
      true
    );
  });

  it('should failed when use wrong zcash address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('t123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(mainnetChecker.preCheck('t1PdVEJq7EDPhEkUS4jGBXhA8SfewenKcB')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('t1PdVEJq7EDPhEkUS4jGBXhA8Sfewen^&!')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('z1KVcK1PEFHRjzJTA3oeXA82tiUGj5V72Cb')).toBe(
      false
    );
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new ZcashChecker();
  it('should validated when use correct zcash address', () => {
    expect(mainnetChecker.isValid('t1TS7ytTTq6vreSTuNkdqosMiBwh79KkBAd')).toBe(
      true
    );
    expect(mainnetChecker.isValid('t1PdVEJq7EDPhEkUS4jGBXhA8SfewenKcBb')).toBe(
      true
    );
    expect(mainnetChecker.isValid('t1KVcK1PEFHRjzJTA3oeXA82tiUGj5V72Cb')).toBe(
      true
    );
    expect(mainnetChecker.isValid('t1Lz3716E9ReWJABhVkYUpenSDHMis9YXjk')).toBe(
      true
    );
    expect(mainnetChecker.isValid('t1KVcK1PEFHRjzJTA3oeXA82tiUGj5V72Cb')).toBe(
      true
    );
  });

  it('should failed when use wrong zcash address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.isValid('%%@')).toBe(false);

    expect(mainnetChecker.isValid('TKsf1234dfs')).toBe(false);
    expect(mainnetChecker.isValid('BGDw56w7MU1WSK2MFNUcPWxZPV2LhuBmCc')).toBe(
      false
    );
    expect(mainnetChecker.isValid('t1PdVEJq7EDPhEkUS4jGBXhA8SfewenKcB')).toBe(
      false
    );
    expect(mainnetChecker.isValid('t1PdVEJq7EDPhEkUS4jGBXhA8Sfewen^&!')).toBe(
      false
    );
    expect(mainnetChecker.isValid('z1KVcK1PEFHRjzJTA3oeXA82tiUGj5V72Cb')).toBe(
      false
    );
    expect(mainnetChecker.isValid('t1PdVEJq7EDPhEkUS4jGBXhA8SfewenKcB1')).toBe(
      false
    );
  });
});
