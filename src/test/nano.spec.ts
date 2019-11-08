import NanoChecker from '@/modules/nano';

describe('preCheck()', () => {
  // mainnet
  const mainnetChecker = new NanoChecker();
  it('should validated when use correct nano address', () => {
    expect(
      mainnetChecker.preCheck(
        'nano_14cuejfpr58epnpxenirusimsrbwxbecin7a3izq1injptecc31qsjwquoe6'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'nano_3xinwsdt57qo5bcysock15do87r9fuepq84erab5udm6wekymq9e9tiin8hw'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'nano_3uip1jmeo4irjuua9xiyosq6fkgogwd6bf5uqopb1m6mfq6g3n8cna6h3tuk'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est'
      )
    ).toBe(true);
    expect(
      mainnetChecker.preCheck(
        'nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3'
      )
    ).toBe(true);
  });

  it('should failed when use wrong nano address', () => {
    expect(mainnetChecker.preCheck('')).toBe(false);
    expect(mainnetChecker.preCheck('nano_123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.preCheck('%%@')).toBe(false);

    expect(
      mainnetChecker.preCheck(
        '_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3'
      )
    ).toBe(false);
    expect(
      mainnetChecker.preCheck(
        'nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr!'
      )
    ).toBe(false);
    expect(
      mainnetChecker.preCheck(
        'nano_3t6k3@gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3'
      )
    ).toBe(false);
  });
});

describe('validate()', () => {
  // mainnet
  const mainnetChecker = new NanoChecker();
  it('should validated when use correct nano address', () => {
    expect(
      mainnetChecker.validate(
        'nano_14cuejfpr58epnpxenirusimsrbwxbecin7a3izq1injptecc31qsjwquoe6'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        'nano_3xinwsdt57qo5bcysock15do87r9fuepq84erab5udm6wekymq9e9tiin8hw'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        'nano_3uip1jmeo4irjuua9xiyosq6fkgogwd6bf5uqopb1m6mfq6g3n8cna6h3tuk'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        'nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        'xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est'
      )
    ).toBe(true);
    expect(
      mainnetChecker.validate(
        'nano_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3'
      )
    ).toBe(true);
  });

  it('should failed when use wrong nano address', () => {
    expect(mainnetChecker.validate('')).toBe(false);
    expect(mainnetChecker.validate('nano_123')).toBe(false);
    // invalid base58 string
    expect(mainnetChecker.validate('%%@')).toBe(false);

    expect(
      mainnetChecker.validate(
        'xrb_3uip1jmeo4irjuua9xiyosq6fkgogwd6bf5uqopb1m6mfq6g3n8cna6h3tu0'
      )
    ).toBe(false);
    expect(
      mainnetChecker.validate(
        'xrb_3uip1jmeo4irjuua9xiyosq6fkgogwd6bf5uqopb1m6mfq6g3n8cna6h3tu2'
      )
    ).toBe(false);
    expect(
      mainnetChecker.validate(
        'xrb_03ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo'
      )
    ).toBe(false);
    expect(
      mainnetChecker.validate(
        'xrb_23ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo'
      )
    ).toBe(false);
    expect(
      mainnetChecker.validate(
        'nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9esa'
      )
    ).toBe(false);
  });
});
