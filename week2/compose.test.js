const c = require('./compose.js');

test('Testar compose com função de adicionar 2 números', () => {
    let multiplyBy5 = (x) => x * 5;
    let add2 = (x) => x + 2;

    let multiplyBy5Add2 = c(multiplyBy5, add2);

    let result = multiplyBy5Add2(7););

    expect(result).toBe(45);
});
