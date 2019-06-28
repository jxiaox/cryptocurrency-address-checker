const toHex = (bytes: Buffer): string => {
  return Array.from(bytes, byte => {
    // tslint:disable-next-line:no-bitwise
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
};

export { toHex };
