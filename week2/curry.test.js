var c = require('./curry.js');

test('Testar curry com função de adicionar 2 números', () => {
    const add = (x,y) => x + y;
    const curryAdd = c(add);

    let result = curryAdd(2)(3);

    expect(result).toBe(5);
});
