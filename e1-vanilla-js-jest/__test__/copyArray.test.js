const copyArray = require('../js/copyArray');

test('It is used to copy and array', () => {
  const arr = [1, 2, 3];

  expect(copyArray(arr)).toEqual(arr);
});
