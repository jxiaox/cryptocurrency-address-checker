import DASHChecker from '@/modules/dash';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new DASHChecker();
  it('should validated when use correct dash address', () => {
    expect(mainnetChecker.preCheck('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahb6b')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('XcY4WJ6Z2Q8w7vcYER1JypC8s2oa3SQ1b1')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('XqMkVUZnqe3w4xvgdZRtZoe7gMitDudGs4')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('XxN85DoLW6dTa21f8RmUuUx1zyBCMESPMw')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahabc')).toBe(
      true
    );
  });

  it('should failed when use wrong dash address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('D123')).toBe(false);
    expect(mainnetChecker.preCheck('X1234')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('X')).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new DASHChecker();
  it('should validated when use correct dash address', () => {
    expect(mainnetChecker.isValid('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahb6b')).toBe(
      true
    );
    expect(mainnetChecker.isValid('XcY4WJ6Z2Q8w7vcYER1JypC8s2oa3SQ1b1')).toBe(
      true
    );
    expect(mainnetChecker.isValid('XqMkVUZnqe3w4xvgdZRtZoe7gMitDudGs4')).toBe(
      true
    );
    expect(mainnetChecker.isValid('XxN85DoLW6dTa21f8RmUuUx1zyBCMESPMw')).toBe(
      true
    );
  });

  it('should failed when use wrong dash address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('D123')).toBe(false);
    expect(mainnetChecker.isValid('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahabc')).toBe(
      false
    );
    // invalid base58 string
    expect(mainnetChecker.isValid('Xx4dYKgz3Zcv6kheaqog3fynaKWjbaha553')).toBe(
      false
    );
    expect(mainnetChecker.isValid('X1234')).toBe(false);
    expect(mainnetChecker.isValid('X')).toBe(false);
  });
});
