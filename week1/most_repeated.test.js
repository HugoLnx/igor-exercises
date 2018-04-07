const m = require("./most_repeated");

test('Teste mais repetido 1', () => {
  expect(m([])).toEqual({"n": 0, "repetition": 0});
});

test('Teste mais repetido 2', () => {
  expect(m([8,8,8,9,9,9,9])).toEqual({"n": 9, "repetition": 4});
});

test('Teste mais repetido 3', () => {
  expect(m([1,1,1,1,3,3,4,5,6,7,7,7])).toEqual({"n": 1, "repetition": 4});
});