import DogeChecker from '@/modules/doge';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new DogeChecker();
  it('should validated when use correct doge address', () => {
    expect(mainnetChecker.preCheck('DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DP5mjk9SEYtzhnhkkC24PEjxNtDN7JGRx3')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('D8EyEfuNsfQ3root9R3ac54mMcLmoNBW6q')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DFN5b3Usara4aZAvhT6muXd3hR49d5zxio')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DFN5b3Usara4aZAvhT6muXd3hR49d5zxi1')).toBe(
      true
    );
  });

  it('should failed when use wrong doge address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('A123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(
      mainnetChecker.preCheck('0x6f46cf5569aefa1acc1009290c8e043747172d89')
    ).toBe(false);
    expect(
      mainnetChecker.preCheck('LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst^&!')
    ).toBe(false);
    expect(mainnetChecker.preCheck('0xsfdlffsjksldfj[IPv6:2001:db8::2]')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W')).toBe(
      false
    );
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new DogeChecker();
  it('should validated when use correct doge address', () => {
    expect(mainnetChecker.validate('DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o')).toBe(
      true
    );
    expect(mainnetChecker.validate('DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG')).toBe(
      true
    );
    expect(mainnetChecker.validate('DP5mjk9SEYtzhnhkkC24PEjxNtDN7JGRx3')).toBe(
      true
    );
    expect(mainnetChecker.validate('D8EyEfuNsfQ3root9R3ac54mMcLmoNBW6q')).toBe(
      true
    );
    expect(mainnetChecker.validate('DFN5b3Usara4aZAvhT6muXd3hR49d5zxio')).toBe(
      true
    );
  });

  it('should failed when use wrong doge address', () => {
    expect(mainnetChecker.validate('')).toBe(false);
    expect(mainnetChecker.validate('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.validate('%%@')).toBe(false);

    expect(
      mainnetChecker.validate('0x6f46cf5569aefa1acc1009290c8e043747172d89')
    ).toBe(false);
    expect(
      mainnetChecker.validate('LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst^&!')
    ).toBe(false);
    expect(mainnetChecker.validate('0xsfdlffsjksldfj[IPv6:2001:db8::2]')).toBe(
      false
    );
    expect(mainnetChecker.validate('16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk')).toBe(
      false
    );
    expect(mainnetChecker.validate('XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W')).toBe(
      false
    );
    expect(mainnetChecker.validate('DFN5b3Usara4aZAvhT6muXd3hR49d5zxi1')).toBe(
      false
    );
  });
});
