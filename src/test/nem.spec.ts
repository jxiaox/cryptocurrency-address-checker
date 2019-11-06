import NEMChecker from '@/modules/nem';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new NEMChecker();
  it('should validated when use correct nem address', () => {
    expect(
      mainnetChecker.preCheck('nckzd7-jgdlnd-ivvph6-u2pg2q-kd3px3-fx4cpz-mf2a')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('nbkax6-tjtfsp-mmhqpd-4bfavg-h6kgjv-doaoc5-4tsy')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('nas6xr-2ryvns-lvs4dv-qlikwx-ntfg6p-erzsj7-wpnb')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('nb3log-iicyxh-soblcs-4dju7q-gdqlkj-r7ocd6-3xym')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('nd7wtc-azehzo-pszh7w-22xlij-vdq5rt-6qwbpp-qvrw')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('ncvkqz-j4aclc-4pmz2r-c22grf-2qntnj-c2fmnf-2vwu')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('nckw2x-h4c4cl-6swcfa-75ghua-5brzh6-ttoviu-pmjj')
    ).toBe(true);
  });

  it('should failed when use wrong nem address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('n123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(mainnetChecker.preCheck('n12345-678sdf')).toBe(false);
    expect(
      mainnetChecker.preCheck('ncvkqz-j4aclc-4pmz2r-c22grf-2qntnj-c2fmnf')
    ).toBe(false);
    expect(
      mainnetChecker.preCheck('ncvkqz-j4aclc-4pmz2r-c22grf-2qntnj-c2fmnf-2vwud')
    ).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new NEMChecker();
  it('should validated when use correct nem address', () => {
    expect(
      mainnetChecker.validate('nckzd7-jgdlnd-ivvph6-u2pg2q-kd3px3-fx4cpz-mf2a')
    ).toBe(true);
    expect(
      mainnetChecker.validate('nbkax6-tjtfsp-mmhqpd-4bfavg-h6kgjv-doaoc5-4tsy')
    ).toBe(true);
    expect(
      mainnetChecker.validate('nas6xr-2ryvns-lvs4dv-qlikwx-ntfg6p-erzsj7-wpnb')
    ).toBe(true);
    expect(
      mainnetChecker.validate('nb3log-iicyxh-soblcs-4dju7q-gdqlkj-r7ocd6-3xym')
    ).toBe(true);
    expect(
      mainnetChecker.validate('nd7wtc-azehzo-pszh7w-22xlij-vdq5rt-6qwbpp-qvrw')
    ).toBe(true);
    expect(
      mainnetChecker.validate('ncvkqz-j4aclc-4pmz2r-c22grf-2qntnj-c2fmnf-2vwu')
    ).toBe(true);
    expect(
      mainnetChecker.validate('nckw2x-h4c4cl-6swcfa-75ghua-5brzh6-ttoviu-pmjj')
    ).toBe(true);
  });

  it('should failed when use wrong nem address', () => {
    expect(mainnetChecker.validate('')).toBe(false);
    expect(mainnetChecker.validate('n123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.validate('%%@')).toBe(false);

    expect(
      mainnetChecker.validate('ncvkqz-j4aclc-4pmz2r-c22grf-2qntnj-c2fmnf')
    ).toBe(false);
    expect(
      mainnetChecker.validate('ncvkqz-j4aclc-4pmz2r-c22grf-2qntnj-c2fmnf-2vwud')
    ).toBe(false);
    expect(
      mainnetChecker.validate('ncvkqz-j4aclc-4pmz2r-c22grf-2qntnj-c2fmnf-2vw1')
    ).toBe(false);
  });
});
