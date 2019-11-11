import NEOChecker from '@/modules/neo';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new NEOChecker();
  it('should validated when use correct neo address', () => {
    expect(mainnetChecker.preCheck('AavRS4Pvs8eG1vsmyJKw8A6ChVwauLL3dn')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('ANfNAWSjNqeH7Jgiy4ehsiWbXgpwEkvdFn')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('AGDw56w7MU1WSK2MFNUcPWxZPV2LhuBmCc')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('AGDw56w7MU1WSK2MFNUcPWxZPV2LhuBmC1')).toBe(
      true
    );
  });

  it('should failed when use wrong neo address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('A123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(mainnetChecker.preCheck('A12345678sdf')).toBe(false);
    expect(mainnetChecker.preCheck('AYyiYD6PD38gtsDHh9QYQPDnfZyQ6F^&!')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('BGDw56w7MU1WSK2MFNUcPWxZPV2LhuBmCc')).toBe(
      false
    );
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new NEOChecker();
  it('should validated when use correct neo address', () => {
    expect(mainnetChecker.isValid('AavRS4Pvs8eG1vsmyJKw8A6ChVwauLL3dn')).toBe(
      true
    );
    expect(mainnetChecker.isValid('ANfNAWSjNqeH7Jgiy4ehsiWbXgpwEkvdFn')).toBe(
      true
    );
    expect(mainnetChecker.isValid('AGDw56w7MU1WSK2MFNUcPWxZPV2LhuBmCc')).toBe(
      true
    );
  });

  it('should failed when use wrong neo address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.isValid('%%@')).toBe(false);

    expect(mainnetChecker.isValid('TKsf1234dfs')).toBe(false);
    expect(mainnetChecker.isValid('BGDw56w7MU1WSK2MFNUcPWxZPV2LhuBmCc')).toBe(
      false
    );
    expect(mainnetChecker.isValid('AGDw56w7MU1WSK2MFNUcPWxZPV2LhuBmC1')).toBe(
      false
    );
  });
});
