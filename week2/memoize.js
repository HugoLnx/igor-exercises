const fibonnaci = (x) => {
    if (x <= 1) {
        return 1;
    }
    let result = fibonnaci(x-1) + fibonnaci(x-2);
    return result;
}

const exponencial = (number, expo) => {

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

    let rest = expo % 2;
    let newExpo = Math.trunc(expo / 2);

    let result = exponencial(number, newExpo, memoize) * exponencial(number, newExpo, memoize) * ((rest) ? exponencial(number, rest, memoize) : 1);

    return result;
}

const memoize = (fn) => {

    let saved = {};

    return (...args) => {
        if (saved[args]) {
            return saved[args];
        }
        else {
            let result = fn.apply(this, args);
            saved[args] = result;
            return result;
        }

    }
}

module.exports = {fibonnaci, exponencial, memoize};
