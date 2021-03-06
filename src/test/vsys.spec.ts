import VSYSChecker from '@/modules/vsys';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new VSYSChecker();
  it('should validated when use correct vsys address', () => {
    expect(mainnetChecker.preCheck('ARHXxk7ZYLpALQhFGKX4GjvRSYQi3ZztRnV')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('AUAztxsft2v6rmjRRb72nLea6BNyRHHWpUR')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('AR3BV6cgdM1GyNGEvM1YDPmejxZeZ8uJEd2')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('AREExiJHmLb15ePMTyajnt4wb2bD4BENsM4')).toBe(
      true
    );
  });

  it('should failed when use wrong vsys address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('A123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(mainnetChecker.preCheck('AREExiJHmLb15ePMTyajnt4wb2bD4BENsM')).toBe(
      false
    );

    expect(mainnetChecker.preCheck('AREExiJHmLb15ePMTyajnt4wb2bD4BENsM!')).toBe(
      false
    );
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new VSYSChecker();
  it('should validated when use correct vsys address', () => {
    expect(mainnetChecker.isValid('ARHXxk7ZYLpALQhFGKX4GjvRSYQi3ZztRnV')).toBe(
      true
    );
    expect(mainnetChecker.isValid('AUAztxsft2v6rmjRRb72nLea6BNyRHHWpUR')).toBe(
      true
    );
    expect(mainnetChecker.isValid('AR3BV6cgdM1GyNGEvM1YDPmejxZeZ8uJEd2')).toBe(
      true
    );
    expect(mainnetChecker.isValid('AREExiJHmLb15ePMTyajnt4wb2bD4BENsM4')).toBe(
      true
    );
  });

  it('should failed when use wrong vsys address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('A123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.isValid('%%@')).toBe(false);

    expect(mainnetChecker.isValid('AREExiJHmLb15ePMTyajnt4wb2bD4BENsM')).toBe(
      false
    );

    expect(mainnetChecker.isValid('AREExiJHmLb15ePMTyajnt4wb2bD4BENsM!')).toBe(
      false
    );
    expect(mainnetChecker.isValid('AREExiJHmLb15ePMTyajnt4wb2bD4BENsMm')).toBe(
      false
    );
  });
});
