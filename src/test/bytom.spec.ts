import BtmChecker from '@/modules/bytom';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new BtmChecker();
  it('should validated when use correct btm address', () => {
    expect(
      mainnetChecker.preCheck('bm1q6pnlangvphjvrrrfekpshp2t0vkcd0tzdlcnuv')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('bm1qyqg7k60wncrts6rfmq5gdedg07kng8j646j25p')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('bm1qw266yu6zjkp8l9x5lum7652wk3asd33kpc0hvr')
    ).toBe(true);
    expect(
      mainnetChecker.preCheck('bm1qfm3wndngskusuzca8wypfw2dmpvzg420p0da60')
    ).toBe(true);
  });

  it('should failed when use wrong btm address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('bm1q123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(
      mainnetChecker.preCheck('bm1q6pnlangvphjvrrrfekpshp2t0vkcd0tzdlcnu!')
    ).toBe(false);
    expect(
      mainnetChecker.preCheck('bm1q6pnlangvphjvrrrfekpshp2t0vkcd0tzdlcnuv^&!')
    ).toBe(false);
    expect(
      mainnetChecker.preCheck('bm1q6pnlangvphjvrrrfekpshp2t0vkcd0tzdlcnuv1')
    ).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new BtmChecker();
  it('should validated when use correct btm address', () => {
    expect(
      mainnetChecker.validate('bm1q6pnlangvphjvrrrfekpshp2t0vkcd0tzdlcnuv')
    ).toBe(true);
    expect(
      mainnetChecker.validate('bm1qyqg7k60wncrts6rfmq5gdedg07kng8j646j25p')
    ).toBe(true);
    expect(
      mainnetChecker.validate('bm1qw266yu6zjkp8l9x5lum7652wk3asd33kpc0hvr')
    ).toBe(true);
    expect(
      mainnetChecker.validate('bm1qfm3wndngskusuzca8wypfw2dmpvzg420p0da60')
    ).toBe(true);
  });

  it('should failed when use wrong btm address', () => {
    expect(mainnetChecker.validate('')).toBe(false);
    expect(mainnetChecker.validate('L123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.validate('%%@')).toBe(false);

    expect(
      mainnetChecker.validate('bm1q6pnlangvphjvrrrfekpshp2t0vkcd0tzdlcnu!')
    ).toBe(false);
    expect(
      mainnetChecker.validate('bm1q6pnlangvphjvrrrfekpshp2t0vkcd0tzdlcnuv1')
    ).toBe(false);
    expect(
      mainnetChecker.validate('bm1qfm3wndngskusuzca8wypfw2dmpvzg420p0da6q')
    ).toBe(false);
  });
});
