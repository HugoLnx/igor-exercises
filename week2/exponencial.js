const isDecimal = (number) => {return parseInt(number) != parseFloat(number);}

// const decimalToFraction = (number) => {
//     let numerador = number.toString().split('.').join('');
//     let denominador = '1';
//     let qtd_casas_decimais = number.toString().split('.')[1].length;
//     for (let i = 0; i < qtd_casas_decimais; i++) {
//         denominador = denominador + '0';
//     }
//     return {'numerador': parseInt(numerador), 'denominador': parseInt(denominador)};
// }

const exponencial = (number, expo) => {

    if (isDecimal(expo)) {
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

    let rest = expo % 2;
    expo = Math.trunc(expo / 2);

    if (rest) {
        return exponencial(number, expo) * exponencial(number, expo) * exponencial(number, rest);
    }
    else {
        return exponencial(number, expo) * exponencial(number, expo);
    }
}

module.exports = exponencial;
