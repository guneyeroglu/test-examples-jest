const substract = require('../js/substract');

test('It is used to substract two numbers', () => {
  expect(substract(5, 7)).toBe(-2);
});
