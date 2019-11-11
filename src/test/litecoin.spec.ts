import LitecoinChecker from '@/modules/litecoin';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new LitecoinChecker();
  it('should validated when use correct ltc address', () => {
    expect(mainnetChecker.preCheck('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('LiL8HvSJRDgnS5BXATWe5MzWYicCbRvisr')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );
  });

  it('should failed when use wrong ltc address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('L123')).toBe(false);
    expect(mainnetChecker.preCheck('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhe')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef')).toBe(
      false
    );
    expect(
      mainnetChecker.preCheck('bd839e4f6fadb293ba580df5dea7814399989983')
    ).toBe(false);
    expect(mainnetChecker.preCheck('miCVC7QcY917Cz427qTBEUrvBzRapHrupc')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('rrRmhfXzGBKbV4YHtbpxfA1ftEcry8AJaX')).toBe(
      false
    );

    // bitcoin addresses
    expect(mainnetChecker.preCheck('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd')).toBe(
      false
    );

    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new LitecoinChecker();
  it('should validated when use correct ltc address', () => {
    expect(mainnetChecker.isValid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9')).toBe(
      true
    );
    expect(mainnetChecker.isValid('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW')).toBe(
      true
    );
    expect(mainnetChecker.isValid('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6')).toBe(
      true
    );
    expect(mainnetChecker.isValid('LiL8HvSJRDgnS5BXATWe5MzWYicCbRvisr')).toBe(
      true
    );
    expect(mainnetChecker.isValid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );
  });

  it('should failed when use wrong ltc address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('L123')).toBe(false);
    expect(mainnetChecker.isValid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhe')).toBe(
      false
    );
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

    // bitcoin addresses
    expect(mainnetChecker.isValid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP')).toBe(
      false
    );
    expect(mainnetChecker.isValid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y')).toBe(
      false
    );
    expect(mainnetChecker.isValid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs')).toBe(
      false
    );
    expect(mainnetChecker.isValid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez')).toBe(
      false
    );
    expect(mainnetChecker.isValid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd')).toBe(
      false
    );

    // invalid base58 string
    expect(mainnetChecker.isValid('%%@')).toBe(false);
  });
});
