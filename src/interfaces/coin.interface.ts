import { Network_type } from '../utils/constants';
interface ICoin {
  name: string;
  symbol: string;
  hashAlgorithm: string;
  networkType: Network_type;
}

interface ICoinCheckerInfo extends ICoin {
  isValid: boolean;
}

export default ICoin;

export { ICoinCheckerInfo };
