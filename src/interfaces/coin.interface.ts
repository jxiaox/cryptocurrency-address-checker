import { Network_type } from '@/utils/constants';
export default interface ICoin {
  name: string;
  symbol: string;
  hashAlgorithm: string;
  expectedLength: number;
  networkType: Network_type;
}
