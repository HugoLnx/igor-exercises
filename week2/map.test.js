const m = require('./map');

test('Testar função map de percorrer array, testando passando uma função para dobrar os valores internos da array', () => {
    expect(m([1,2,3,4,5], (number) => {
        return 2 * number;
    })).toEqual([2,4,6,8,10]);
});
