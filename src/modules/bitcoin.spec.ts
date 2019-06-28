// tslint:disable:no-expression-statement
import test from 'ava';
import BitcoinChecker from './bitcoin';

test('validate', t => {
  t.is(BitcoinChecker.validate('test'), true);
  t.is(BitcoinChecker.validate(''), false);
});
