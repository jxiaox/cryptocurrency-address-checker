import ATOMChecker from '@/modules/cosmos';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new ATOMChecker();
  it('should validated when use correct atom address', () => {
    expect(
      mainnetChecker.preCheck('cosmos144fzpepuvdftv4u4r9kq8t35ap2crruv4u3udz')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('cosmos1crlqmcn9s9ltsmvpww9yvd03jzrrfqtct2e96e')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('cosmos1ef2la87e0e20qkue0qmz6cv0sa70hpkz59xl9w')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('cosmos14dyt820lmderp0fg56e22a4p4j0q6n3yv5y7lg')
    ).toBe(true);
  });

  it('should failed when use wrong atom address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('D123')).toBe(false);
    expect(mainnetChecker.preCheck('cosmos1')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('cosmos1234')).toBe(false);
    expect(
      mainnetChecker.preCheck('cosmos14dyt820lmderp0fg56e22a4p4j0q6n3yv5y7!@')
    ).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new ATOMChecker();
  it('should validated when use correct atom address', () => {
    expect(
      mainnetChecker.isValid('cosmos144fzpepuvdftv4u4r9kq8t35ap2crruv4u3udz')
    ).toBe(true);
    expect(
      mainnetChecker.isValid('cosmos1crlqmcn9s9ltsmvpww9yvd03jzrrfqtct2e96e')
    ).toBe(true);
    expect(
      mainnetChecker.isValid('cosmos1ef2la87e0e20qkue0qmz6cv0sa70hpkz59xl9w')
    ).toBe(true);
    expect(
      mainnetChecker.isValid('cosmos14dyt820lmderp0fg56e22a4p4j0q6n3yv5y7lg')
    ).toBe(true);
  });

  it('should failed when use wrong atom address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('D123')).toBe(false);
    expect(
      mainnetChecker.isValid('cosmos14dyt820lmderp0fg56e22a4p4j0q6n3yv5y7!@')
    ).toBe(false);
    expect(mainnetChecker.isValid('cosmos1')).toBe(false);
    expect(
      mainnetChecker.isValid('cosmos14dyt820lmderp0fg56e22a4p4j0q6n3yv5y7la')
    ).toBe(false);
  });
});
