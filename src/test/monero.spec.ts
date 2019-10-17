import XMRChecker from '@/modules/monero';

describe('preCheck()', () => {
  const fixtures = [
    '47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs',
    '42oAxV3DVXXG3HhyCyi2xaPukKXbip9Sx1YuJtoCqjZRSze4tYCq7n3VUswDBFV59Zev8yfHSZro4TUwXumtRWnQ8xQipkC',
    '44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A',
    '47gRtvuDS9dNjkNs2nFqiSVHk3tqdT239j9Tj1KxAWNPRogHnGUdMdvQBwevobeAxQHqjBu8WcZzfNrdbReYNAU1KBidTzc',
    '46qB9tcR1feVZ7xq42tx8V8sLbYdnFdGf6EndL1fCPRuUXroufYGzzCFtZwrjkthAc8C65xBpmWCYAR1KKBXykF76GADvYE'
  ];
  const fixturesNot = [
    '',
    '4123',
    '4UqB9tcR1feVZ7xq42tx8V8sLbYdnFdGf6EndL1fCPRuUXroufYGzzCFtZwrjkthAc8C65xBpmWCYAR1KKBXykF76GADvYE',
    '16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
    'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
    'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
    '0xsfdlffsjksldfj[IPv6:2001:db8::2]',
    'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W',
    'nikolaskam{at}gmail{dot}com'
  ];
  // mainnet
  const mainnetChecker = new XMRChecker();
  it('should validated when use correct xmr address', () => {
    fixtures.forEach(test => {
      expect(mainnetChecker.preCheck(test)).toEqual(true);
    });
  });

  it('should failed when use wrong xmr address', () => {
    fixturesNot.forEach(test => {
      expect(mainnetChecker.preCheck(test)).toEqual(false);
    });
  });
});

describe('validate()', () => {
  const fixtures = [
    '47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs',
    '42oAxV3DVXXG3HhyCyi2xaPukKXbip9Sx1YuJtoCqjZRSze4tYCq7n3VUswDBFV59Zev8yfHSZro4TUwXumtRWnQ8xQipkC',
    '44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A',
    '47gRtvuDS9dNjkNs2nFqiSVHk3tqdT239j9Tj1KxAWNPRogHnGUdMdvQBwevobeAxQHqjBu8WcZzfNrdbReYNAU1KBidTzc',
    '46qB9tcR1feVZ7xq42tx8V8sLbYdnFdGf6EndL1fCPRuUXroufYGzzCFtZwrjkthAc8C65xBpmWCYAR1KKBXykF76GADvYE'
  ];
  const fixturesNot = [
    '',
    '4123',
    '4UqB9tcR1feVZ7xq42tx8V8sLbYdnFdGf6EndL1fCPRuUXroufYGzzCFtZwrjkthAc8C65xBpmWCYAR1KKBXykF76GADvYE',
    '16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
    'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
    'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
    '0xsfdlffsjksldfj[IPv6:2001:db8::2]',
    'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W',
    'nikolaskam{at}gmail{dot}com'
  ];
  // mainnet
  const mainnetChecker = new XMRChecker();
  it('should validated when use correct xmr address', () => {
    fixtures.forEach(test => {
      expect(mainnetChecker.validate(test)).toEqual(true);
    });
  });

  it('should failed when use wrong xmr address', () => {
    fixturesNot.forEach(test => {
      expect(mainnetChecker.validate(test)).toEqual(false);
    });
  });
});
