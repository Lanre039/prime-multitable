import utils from '../utils';

test('Array should NOT contain nonprime', () => {
  expect(utils.handlePrimeNo('10')).not.toContain([0, 1, 4, 6, 9]);
});
