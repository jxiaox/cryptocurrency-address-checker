import XrpChecker from '@/modules/ripple';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new XrpChecker();
  it('should validated when use correct xrp address', () => {
    expect(mainnetChecker.preCheck('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN')).toBe(
      true
    );
  });

  it('should failed when use wrong xrp address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(mainnetChecker.preCheck('16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('nikolaskam{at}gmail{dot}com')).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new XrpChecker();
  it('should validated when use correct xrp address', () => {
    expect(mainnetChecker.validate('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn')).toBe(
      true
    );
    expect(mainnetChecker.validate('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV')).toBe(
      true
    );
    expect(mainnetChecker.validate('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh')).toBe(
      true
    );
    expect(mainnetChecker.validate('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN')).toBe(
      true
    );
  });

  it('should failed when use wrong xrp address', () => {
    expect(mainnetChecker.validate('')).toBe(false);
    expect(mainnetChecker.validate('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.validate('%%@')).toBe(false);

    expect(mainnetChecker.validate('16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk')).toBe(
      false
    );
    expect(mainnetChecker.validate('DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG')).toBe(
      false
    );
    expect(mainnetChecker.validate('LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst')).toBe(
      false
    );
    expect(mainnetChecker.validate('XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W')).toBe(
      false
    );
    expect(mainnetChecker.validate('XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W')).toBe(
      false
    );
    expect(mainnetChecker.validate('nikolaskam{at}gmail{dot}com')).toBe(false);
  });
});
