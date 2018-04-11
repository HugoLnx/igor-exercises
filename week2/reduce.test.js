const r = require("./reduce.js");

test('Testando reduce para somar os valores de uma array', () => {
    expect(r([1,2,3,4,5], function(a1,a2) {
        return a1+a2;
    })).toBe(15);
});
