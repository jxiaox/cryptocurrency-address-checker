import QTUMChecker from '@/modules/qtum';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new QTUMChecker();
  it('should validated when use correct qtum address', () => {
    expect(mainnetChecker.preCheck('QNjUiD3bVVZwYTc5AhpeQbS1mfb2guyWhe')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('QVZnSrMwKp6AL4FjUPPnfFgsma6j1DXQXu')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('Qb15HZYiDtqozMTXa2MF64dGhKEUbmpHYc')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('QWPhsWtJENsQq2wywwjottco2qNwaDiA3k')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('QU2uZUQGXB7hiXXWdda4K13sSunxu1kQqE')).toBe(
      true
    );
    expect(mainnetChecker.preCheck('QRnEjuAh8VZhZhEJCNLmAj2G7jMinEAn26')).toBe(
      true
    );
  });

  it('should failed when use wrong qtum address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('Q123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(mainnetChecker.preCheck('QRnEjuAh8VZhZhEJCNLmAj2G7jMinEAn2!')).toBe(
      false
    );
    expect(mainnetChecker.preCheck('1RnEjuAh8VZhZhEJCNLmAj2G7jMinEAn26')).toBe(
      false
    );
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new QTUMChecker();
  it('should validated when use correct qtum address', () => {
    expect(mainnetChecker.isValid('QNjUiD3bVVZwYTc5AhpeQbS1mfb2guyWhe')).toBe(
      true
    );
    expect(mainnetChecker.isValid('QVZnSrMwKp6AL4FjUPPnfFgsma6j1DXQXu')).toBe(
      true
    );
    expect(mainnetChecker.isValid('Qb15HZYiDtqozMTXa2MF64dGhKEUbmpHYc')).toBe(
      true
    );
    expect(mainnetChecker.isValid('QWPhsWtJENsQq2wywwjottco2qNwaDiA3k')).toBe(
      true
    );
    expect(mainnetChecker.isValid('QU2uZUQGXB7hiXXWdda4K13sSunxu1kQqE')).toBe(
      true
    );
    expect(mainnetChecker.isValid('QRnEjuAh8VZhZhEJCNLmAj2G7jMinEAn26')).toBe(
      true
    );
  });

  it('should failed when use wrong qtum address', () => {
    expect(mainnetChecker.isValid('')).toBe(false);
    expect(mainnetChecker.isValid('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.isValid('%%@')).toBe(false);

    expect(mainnetChecker.isValid('QRnEjuAh8VZhZhEJCNLmAj2G7jMinEAn2!')).toBe(
      false
    );
    expect(mainnetChecker.isValid('1RnEjuAh8VZhZhEJCNLmAj2G7jMinEAn26')).toBe(
      false
    );
    expect(mainnetChecker.isValid('QRnEjuAh8VZhZhEJCNLmAj2G7jMinEAn2d')).toBe(
      false
    );
  });
});
