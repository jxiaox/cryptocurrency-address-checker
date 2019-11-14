// import IChecker from './checker.interface';

export interface ICoinConfig {
  fullName: string;
  symbol: string;
  algorithm: string;
  addressTypes?: string[];
  addressReg: RegExp[];
  segWitAddressReg?: RegExp;
  checker?: any;
}

export interface ICoinConfigType {
  [k: string]: ICoinConfig; // 可以指定多个类型
}
