const lib = require('../lib');

test('absolute - Should return a positive number if input is positve.', () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test('absolute - Should return a positive number if input is negative.', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  test('absolute - Should return 0 if input is 0.', () => {
    const result = lib.absolute(0);
    expect(result).toBe(1);
  });