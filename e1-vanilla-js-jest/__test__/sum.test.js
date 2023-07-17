const sum = require('../js/sum');

test('It is used to sum two numbers', () => {
  expect(sum(17, 27)).toBe(44);
});
