import DCRChecker from '@/modules/decred';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new DCRChecker();
  it('should validated when use correct dcr address', () => {
    expect(mainnetChecker.preCheck('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh85')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DsYuxtvGRfN8rncXAndtLUpJm55F77K17RA')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DsaXDG2NrJW8g4tFAb8n9MNx81Sn3Qc8AEV')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DcqxSik4CU5sEZL289xpnCppuAuo3xJJMiX')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('DsExampleAddr1For2Demo3PurposesOnly')).toBe(
      true
    );
  });

  it('should failed when use wrong dcr address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('D123')).toBe(false);
    expect(mainnetChecker.preCheck('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh8!')).toBe(
      false
    );
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new DCRChecker();
  it('should validated when use correct dcr address', () => {
    expect(mainnetChecker.isValid('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh85')).toBe(
      true
    );
    expect(mainnetChecker.isValid('DsYuxtvGRfN8rncXAndtLUpJm55F77K17RA')).toBe(
      true
    );
    expect(mainnetChecker.isValid('DsaXDG2NrJW8g4tFAb8n9MNx81Sn3Qc8AEV')).toBe(
      true
    );
    expect(mainnetChecker.isValid('DcqxSik4CU5sEZL289xpnCppuAuo3xJJMiX')).toBe(
      true
    );
  });

  it('should failed when use wrong dcr address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('D123')).toBe(false);
    expect(mainnetChecker.isValid('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh8!')).toBe(
      false
    );
    expect(mainnetChecker.isValid('DsExampleAddr1For2Demo3PurposesOnly')).toBe(
      false
    );
  });
});
