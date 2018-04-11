var f = require('./filter.js');

test('Testar função filter para retornar array filtrada pelos números pares', () => {
    expect(f([1,2,3,4,5], function(value) {
        return value % 2 == 0;
    })).toEqual([2,4]);
});
