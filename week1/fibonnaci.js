const addNumber = (a, b) => a + b;

// A) Fibonnaci
const fibonnaci = (index, arr = [1,1]) => {
    if (!arr[index]) {
        arr.push(addNumber(arr[arr.length - 1], arr[arr.length - 2]));
        fibonnaci(index, arr);
    }

    return arr[index];
}

// B) Memoized Fibonnaci

const fibonnaci = (x, saved = {0: 1, 1: 1}) => {
    if (saved[x]) {
        return saved[x];
    }
    else if (x <= 1) {
        return 1;
    }

    return fibonnaci(x-1) + fibonnaci(x-2);
}

// C) Non Recursive Fibonnaci

const fibonnaci = (x) => {

    let result = 1;

    for (let i = 1, contador = 0, box; i <= x; i++) {

        box = result;
        result = result + contador;
        contador = box;
    }
    return result;
}

module.exports = fibonnaci;
