const m = require("./most_repeated_n_times");

test('Teste mais repetido 1', () => {
  expect(m([], 0)).toEqual([]);
});

test('Teste mais repetido 2', () => {
  expect(m([8,8,9,9,9,9], 2)).toEqual([8]);
});

test('Teste mais repetido 3', () => {
  expect(m([1,1,1,1,3,3,4,5,6,7,7,7], 6)).toEqual([]);
});

test('Teste mais repetido 4', () => {
  expect(m([1,1,1,3,3,3,5,6,7,7,7], 3)).toEqual([1,3,7]);
});
