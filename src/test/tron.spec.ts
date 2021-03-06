import TRXChecker from '@/modules/tron';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new TRXChecker();
  it('should validated when use correct trx address', () => {
    expect(mainnetChecker.preCheck('TKdzsDsd3p954jk2Qq8CsBKQDgkiXE3sjk')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('TEbHbQ7paXAwpzU9GnzALQ3fzsTbvTMimq')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('TJCnKsPa7y5okkXvQAidZBzqx3QyQ6sxMW')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('TYyiYD6PD38gtsDHh9QYQPDnfZyQ6FSAPR')).toBe(
      true
    );
  });

  it('should failed when use wrong trx address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(mainnetChecker.preCheck('TKsf1234dfs')).toBe(false);
    expect(mainnetChecker.preCheck('TYyiYD6PD38gtsDHh9QYQPDnfZyQ6F^&!')).toBe(
      false
    );
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new TRXChecker();
  it('should validated when use correct trx address', () => {
    expect(mainnetChecker.isValid('TKdzsDsd3p954jk2Qq8CsBKQDgkiXE3sjk')).toBe(
      true
    );
    expect(mainnetChecker.isValid('TEbHbQ7paXAwpzU9GnzALQ3fzsTbvTMimq')).toBe(
      true
    );
    expect(mainnetChecker.isValid('TJCnKsPa7y5okkXvQAidZBzqx3QyQ6sxMW')).toBe(
      true
    );
    expect(mainnetChecker.isValid('TYyiYD6PD38gtsDHh9QYQPDnfZyQ6FSAPR')).toBe(
      true
    );
  });

  it('should failed when use wrong trx address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.isValid('%%@')).toBe(false);

    expect(mainnetChecker.isValid('TKsf1234dfs')).toBe(false);
    expect(mainnetChecker.isValid('TYyiYD6PD38gtsDHh9QYQPDnfZyQ6F1234')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('TYyiYD6PD38gtsDHh9QYQPDnfZyQ6F^&!')).toBe(
      false
    );
  });
});
