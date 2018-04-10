const e = require("./exponencial");

test('Testar se 0 elevado a qualquer numero retorna 0', () => {
    expect(e(0,1)).toBe(0);
});

test('Testar se 0 elevado a 0 é igual a 1', () => {
    expect(e(0,0)).toBe(1);
});

test('Testar se 1 elevado a 0 é igual a 1', () => {
    expect(e(1,0)).toBe(1);
});

test('Testar caso normal, de 2 elevado a 5', () => {
    expect(e(2,5)).toBe(32);
});

test('Testar caso normal, de 3 elevado a 3', () => {
    expect(e(3,3)).toBe(27);
});

test('Testar caso normal, de 10 elevado a 4', () => {
    expect(e(10,4)).toBe(10000);
});

test('Testar expoente negativo, de 2 elevado a -1', () => {
    expect(e(2,-1)).toBe(0.5);
});

test('Testar expoente negativo, de 2 elevado a -4', () => {
    expect(e(2,-4)).toBe(0.0625);
});

test('Testar expoente com casas decimais', () => {
    expect(e(2,1.5)).toBe(undefined);
});
