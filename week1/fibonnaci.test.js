const f = require("./fibonnaci");

test('a simple test', () => {
  expect(f(0)).toBe(0);
});

test('a simple failing test', () => {
  expect(f(0)).toBe(10);
});
