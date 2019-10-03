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
    expect(mainnetChecker.validate('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9')).toBe(
      true
    );
    expect(mainnetChecker.validate('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW')).toBe(
      true
    );
    expect(mainnetChecker.validate('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6')).toBe(
      true
    );
    expect(mainnetChecker.validate('LiL8HvSJRDgnS5BXATWe5MzWYicCbRvisr')).toBe(
      true
    );
    expect(mainnetChecker.validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')).toBe(
      true
    );
  });

  it('should failed when use wrong ltc address', () => {
    expect(mainnetChecker.validate('')).toBe(false);
    expect(mainnetChecker.validate('L123')).toBe(false);
    expect(mainnetChecker.validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhe')).toBe(
      false
    );
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

    // bitcoin addresses
    expect(mainnetChecker.validate('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP')).toBe(
      false
    );
    expect(mainnetChecker.validate('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y')).toBe(
      false
    );
    expect(mainnetChecker.validate('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs')).toBe(
      false
    );
    expect(mainnetChecker.validate('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez')).toBe(
      false
    );
    expect(mainnetChecker.validate('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd')).toBe(
      false
    );

    // invalid base58 string
    expect(mainnetChecker.validate('%%@')).toBe(false);
  });
});
