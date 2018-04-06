const f = require("./fibonnaci");


test('Teste fibonnaci recursivo 1', () => {
  expect(f(0)).toBe(1);
});

test('Teste fibonnaci recursivo 2', () => {
  expect(f(1)).toBe(1);
});

test('Teste fibonnaci recursivo 3', () => {
  expect(f(9)).toBe(55);
});
