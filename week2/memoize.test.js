var module = require('./memoize.js');
var f = module.fibonnaci;
var e = module.exponencial;
var m = module.memoize;

test('Testando memoize com fibonnaci (aceitando 1 argumento)', () => {
     let memoFib = m(f);
     let result = memoFib(8);

     expect(result).toBe(34);
});

test('Testando memoize com Exponencial (aceitando 2 argumentos)', () => {
     let memoExp = m(e);
     let result = memoExp(2,4);

     expect(result).toBe(16);
});
