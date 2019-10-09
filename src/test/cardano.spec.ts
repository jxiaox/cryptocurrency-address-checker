import ADAChecker from '@/modules/cardano';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new ADAChecker();
  it('should validated when use correct ada address', () => {
    expect(
      mainnetChecker.preCheck(
        'DdzFFzCqrht1YAwbu3W9EDzAZfKySdgBqmwEE4GfG3X7jDZ5cxnGrQetyrv7txRmkVfQfTRAsny6dkpZTVfD82M39fn5ZbouHyh1RR2x'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'DdzFFzCqrht2WKNEFqHvMSumSQpcnMxcYLNNBXPYXyHpRk9M7PqVjZ5ysYzutnruNubzXak2NxT8UWTFQNzc77uzjQ1GtehBRBdAv7xb'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'Ae2tdPwUPEZG9yQnaNLd1ozq99CiAbRLFQ6zRtPS8YshgLCNRU9ZCsVfw6Z'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        '4swhHtxKapQbj3TZEipgtp7NQzcRWDYqCxXYoPQWjGyHmhxS1w1TjUEszCQT1sQucGwmPQMYdv1FYs3d51KgoubviPBf'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm'
      )
    ).toBe(true);
  });

  it('should failed when use wrong ada address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('D123')).toBe(false);
    expect(mainnetChecker.preCheck('Abcdefg')).toBe(false);
    expect(mainnetChecker.preCheck('41234')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new ADAChecker();
  it('should validated when use correct ada address', () => {
    expect(
      mainnetChecker.validate(
        'DdzFFzCqrht1YAwbu3W9EDzAZfKySdgBqmwEE4GfG3X7jDZ5cxnGrQetyrv7txRmkVfQfTRAsny6dkpZTVfD82M39fn5ZbouHyh1RR2x'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        'DdzFFzCqrht2WKNEFqHvMSumSQpcnMxcYLNNBXPYXyHpRk9M7PqVjZ5ysYzutnruNubzXak2NxT8UWTFQNzc77uzjQ1GtehBRBdAv7xb'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        '4swhHtxKapQbj3TZEipgtp7NQzcRWDYqCxXYoPQWjGyHmhxS1w1TjUEszCQT1sQucGwmPQMYdv1FYs3d51KgoubviPBf'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        'Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm'
      )
    ).toBe(true);
  });

  it('should failed when use wrong ada address', () => {
    expect(mainnetChecker.validate('')).toBe(false);
    expect(mainnetChecker.validate('D123')).toBe(false);
    expect(mainnetChecker.validate('Abcdefg')).toBe(false);
    expect(mainnetChecker.validate('41234')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.validate('%%@')).toBe(false);
  });
});
