import EthChecker from '@/modules/ethereum';

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new EthChecker();

  it('calls isAddress and returns the expected results', () => {
    const tests = [
      { value: 'function', is: false },
      { value: '0xc6d9d2cd449a754c494264e1809c50e34d64562b', is: true },
      { value: 'c6d9d2cd449a754c494264e1809c50e34d64562b', is: true },
      { value: '0xE247A45c287191d435A8a5D72A7C8dc030451E9F', is: true },
      { value: '0xE247a45c287191d435A8a5D72A7C8dc030451E9F', is: false },
      { value: '0xe247a45c287191d435a8a5d72a7c8dc030451e9f', is: true },
      { value: '0xE247A45C287191D435A8A5D72A7C8DC030451E9F', is: true },
      { value: '0XE247A45C287191D435A8A5D72A7C8DC030451E9F', is: true }
    ];

    tests.forEach(test => {
      expect(mainnetChecker.validate(test.value)).toEqual(test.is);
    });
  });

  it('calls isAddress with chainId 30 and returns the expected results', () => {
    const tests = [
      { value: '0x5aaEB6053f3e94c9b9a09f33669435E7ef1bEAeD', is: true },
      { value: '0xFb6916095cA1Df60bb79ce92cE3EA74c37c5d359', is: true },
      { value: '0xDBF03B407c01E7CD3cBea99509D93F8Dddc8C6FB', is: true },
      { value: '0xE247a45c287191d435A8a5D72A7C8dc030451E9F', is: false },
      { value: '0xD1220A0Cf47c7B9BE7a2e6ba89F429762E7B9adB', is: true },
      { value: '0xe247a45c287191d435a8a5d72a7c8dc030451e9f', is: true },
      { value: '0xE247A45C287191D435A8A5D72A7C8DC030451E9F', is: true }
    ];

    tests.forEach(test => {
      expect(mainnetChecker.validate(test.value, 30)).toEqual(test.is);
    });
  });

  it('calls checkAddressChecksum and returns the expected results', () => {
    const tests = [
      { value: '0x52908400098527886E0F7030069857D2E4169EE7', is: true },
      { value: '0x8617E340B3D01FA5F11F306F4090FD50E238070D', is: true },
      { value: '0xde709f2102306220921060314715629080e2fb77', is: true },
      { value: '0x27b1fdb04752bbc536007a920d24acb045561c26', is: true },
      { value: '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', is: true },
      { value: '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', is: true },
      { value: '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', is: true },
      { value: '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', is: true },
      { value: '0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', is: false },
      { value: '0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb', is: false }
    ];

    tests.forEach(test => {
      expect(mainnetChecker.checkAddressChecksum(test.value)).toEqual(test.is);
    });
  });

  it('calls checkAddressChecksum with chainId 31 and returns the expected results', () => {
    const tests = [
      { value: '0x5aAeb6053F3e94c9b9A09F33669435E7EF1BEaEd', is: true },
      { value: '0xFb6916095CA1dF60bb79CE92ce3Ea74C37c5D359', is: true },
      { value: '0xdbF03B407C01E7cd3cbEa99509D93f8dDDc8C6fB', is: true },
      { value: '0xd1220a0CF47c7B9Be7A2E6Ba89f429762E7b9adB', is: true },
      { value: '0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', is: false },
      { value: '0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb', is: false },
      { value: '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', is: false },
      { value: '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', is: false }
    ];

    tests.forEach(test => {
      expect(mainnetChecker.checkAddressChecksum(test.value, 31)).toEqual(
        test.is
      );
    });
  });

  it('calls toChecksumAddress with chainId 30 and returns the expected results', () => {
    // tslint:disable:object-literal-sort-keys
    const tests = [
      {
        value: '0x5aaeb6053f3e94c9b9a09f33669435e7ef1beaed',
        is: '0x5aaEB6053f3e94c9b9a09f33669435E7ef1bEAeD'
      },
      {
        value: '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359',
        is: '0xFb6916095cA1Df60bb79ce92cE3EA74c37c5d359'
      },
      {
        value: '0xdbf03b407c01e7cd3cbea99509d93f8dddc8c6fb',
        is: '0xDBF03B407c01E7CD3cBea99509D93F8Dddc8C6FB'
      },
      {
        value: '0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb',
        is: '0xD1220A0Cf47c7B9BE7a2e6ba89F429762E7B9adB'
      }
    ];

    tests.forEach(test => {
      expect(mainnetChecker.toChecksumAddress(test.value, 30)).toEqual(test.is);
    });
  });

  it('calls toChecksumAddress and returns the expected results', () => {
    const tests = [
      {
        value: '0x5aaeb6053f3e94c9b9a09f33669435e7ef1beaed',
        is: '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed'
      },
      {
        value: '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359',
        is: '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
      },
      {
        value: '0xdbf03b407c01e7cd3cbea99509d93f8dddc8c6fb',
        is: '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB'
      },
      {
        value: '0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb',
        is: '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb'
      }
    ];

    tests.forEach(test => {
      expect(mainnetChecker.toChecksumAddress(test.value)).toEqual(test.is);
    });
  });
});
