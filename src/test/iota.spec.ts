import IOTAChecker from '@/modules/iota';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new IOTAChecker();
  it('should validated when use correct iota address', () => {
    expect(
      mainnetChecker.preCheck(
        'PK9JQCNXRHVFKLFTXZFP9DMTDBAWVLHFYCGHZKVBQLP9FYNACAXYTDXRXDDWTWXENDDSMTVTELNWZKQHINTOZPV9ZC'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'UYEEERFQYTPFAHIPXDQAQYWYMSMCLMGBTYAXLWFRFFWPYFOICOVLK9A9VYNCKK9TQUNBTARCEQXJHD9VYXOEDEOMRC'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'JALLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLSJMPIVGPNF'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        '123adfdsafLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLASD'
      )
    ).toBe(true);
  });

  it('should failed when use wrong iota address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('D123')).toBe(false);
    expect(
      mainnetChecker.preCheck(
        'JALLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLS'
      )
    ).toBe(false);
    // invalid base58 string
    expect(
      mainnetChecker.preCheck(
        'JALLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNR'
      )
    ).toBe(false);
    expect(
      mainnetChecker.preCheck(
        '123adfdsafLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLA#@'
      )
    ).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new IOTAChecker();
  it('should validated when use correct iota address', () => {
    expect(
      mainnetChecker.isValid(
        'PK9JQCNXRHVFKLFTXZFP9DMTDBAWVLHFYCGHZKVBQLP9FYNACAXYTDXRXDDWTWXENDDSMTVTELNWZKQHINTOZPV9ZC'
      )
    ).toBe(true);
    expect(
      mainnetChecker.isValid(
        'UYEEERFQYTPFAHIPXDQAQYWYMSMCLMGBTYAXLWFRFFWPYFOICOVLK9A9VYNCKK9TQUNBTARCEQXJHD9VYXOEDEOMRC'
      )
    ).toBe(true);
  });

  it('should failed when use wrong iota address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('D123')).toBe(false);
    expect(
      mainnetChecker.isValid(
        'JALLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLS'
      )
    ).toBe(false);
    // invalid base58 string
    expect(
      mainnetChecker.isValid(
        'JALLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNR'
      )
    ).toBe(false);
    expect(
      mainnetChecker.isValid(
        'JALLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLSJMPIVGPNF'
      )
    ).toBe(false);
    expect(
      mainnetChecker.isValid(
        '123adfdsafLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLASD'
      )
    ).toBe(false);
    expect(
      mainnetChecker.isValid(
        '123adfdsafLWDUOSTSJVL9EEHKW9YQFPBVBJAGLNKRVGSQZCGHQWEMIIILJMTHVAGVDXJVZMBAMOZTSBQNRVNLLA#@'
      )
    ).toBe(false);
  });
});
