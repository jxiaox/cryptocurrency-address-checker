declare module 'cashaddrjs' {
  function encode(prefix: string, type: string, hash: Uint8Array): string;
  function decode(address: string): IAddressInfo;
  // tslint:disable-next-line:interface-name
  interface ValidationError extends Error {
    name: string;
    message: string;
    stack: string | undefined;
  }
  interface IAddressInfo {
    prefix: string;
    type: string;
    hash: Uint8Array;
  }
  export { encode, decode, ValidationError, IAddressInfo };
}
