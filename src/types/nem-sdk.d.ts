declare module 'nem-sdk' {
  interface IAddress {
    isValid(address: string): boolean;
  }

  interface IModel {
    address: IAddress;
  }

  const model: IModel;

  interface INem {
    model: IModel;
  }
  const nem: INem;
  export default nem;
}
