// const decimalToFraction = (number) => {
//     let numerador = number.toString().split('.').join('');
//     let denominador = '1';
//     let qtd_casas_decimais = number.toString().split('.')[1].length;
//     for (let i = 0; i < qtd_casas_decimais; i++) {
//         denominador = denominador + '0';
//     }
//     return {'numerador': parseInt(numerador), 'denominador': parseInt(denominador)};
// }

const exponencial = (number, expo, memoize = {0: 1}) => {

    if (memoize[expo]) {
        return memoize[expo];
    }
    else {
        if (!Number.isInteger(expo)) {
            return undefined;
        }
        else if (expo == 1) {
            return number;
        }
        else if (expo == 0) {
            return 1;
        }
        else if (expo < 0) {
            number = number / (number * number);
            expo = expo * (-1);
        }
    }

    let rest = expo % 2;
    let newExpo = Math.trunc(expo / 2);

    let result = exponencial(number, newExpo, memoize) * exponencial(number, newExpo, memoize) * ((rest) ? exponencial(number, rest, memoize) : 1);

    memoize[expo] = result;
    return result;
}

module.exports = exponencial;
