import EthChecker from '@/modules/ethereum';

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new EthChecker();

  it('should validated when use correct eth address', () => {
    expect(
      mainnetChecker.validate('0xc6d9d2cd449a754c494264e1809c50e34d64562b')
    ).toBe(true);
    expect(
      mainnetChecker.validate('c6d9d2cd449a754c494264e1809c50e34d64562b')
    ).toBe(true);
    expect(
      mainnetChecker.validate('0xe247a45c287191d435a8a5d72a7c8dc030451e9f')
    ).toBe(true);
    expect(
      mainnetChecker.validate('0xE247A45C287191D435A8A5D72A7C8DC030451E9F')
    ).toBe(true);
    expect(
      mainnetChecker.validate('0XE247A45C287191D435A8A5D72A7C8DC030451E9F')
    ).toBe(true);
  });

  it('should failed when use wrong eth address', () => {
    expect(
      mainnetChecker.validate('0xE247a45c287191d435A8a5D72A7C8dc030451E9F')
    ).toBe(false);
    expect(
      mainnetChecker.validate('0xE247a45c287191d435A8a5D72A7C8dc030451E9F')
    ).toBe(false);
  });
  // it('should validated when use correct bch address', () => {});
  // it('should validated when use correct bch address', () => {});
});
