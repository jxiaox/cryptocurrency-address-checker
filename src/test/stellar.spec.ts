import XLMChecker from '@/modules/stellar';

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new XLMChecker();

  it('should validated when use correct xlm address', () => {
    expect(
      mainnetChecker.isValid(
        'GBH4TZYZ4IRCPO44CBOLFUHULU2WGALXTAVESQA6432MBJMABBB4GIYI'
      )
    ).toBe(true);
    expect(
      mainnetChecker.isValid(
        'GBDUXW4E5WRM5EM6UXBLE7Y5XGSXJX472BSSBPKFPQ3PJCJHRIA6SH4C'
      )
    ).toBe(true);
    expect(
      mainnetChecker.isValid(
        'GBQY3VQXI3TCFOFQYRGQDY4MNMHAHXIAVQ2PEGPKOWTNICFIHNN5QSFD'
      )
    ).toBe(true);
    expect(
      mainnetChecker.isValid(
        'gbh4tzyz4ircpo44cbolfuhulu2wgalxtavesqa6432mbjmabbb4giyi'
      )
    ).toBe(true);
  });

  it('should failed when use wrong xlm address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('G1234')).toBe(false);
    expect(mainnetChecker.isValid('ggggg')).toBe(false);
    expect(
      mainnetChecker.isValid('0xc6d9d2cd449a754c494264e1809c50e34d64562b')
    ).toBe(false);
  });
});
