// tslint:disable:no-expression-statement
import test from 'ava';
import BitcoinChecker from './bitcoin';

test('validate', t => {
  t.is(BitcoinChecker.validate('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP'), true);
  t.is(BitcoinChecker.validate(''), false);
});
