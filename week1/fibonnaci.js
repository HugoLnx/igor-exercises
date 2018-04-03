const addNumber = (a, b) => a + b;

// A) Fibonnaci
// const fibonnaci = (index, arr = [1,1]) => {
//
//     if (arr[index]) {
//         return arr[index];
//
//     }
//     else {
//         arr.push(addNumber(arr[arr.length - 1], arr[arr.length - 2]));
//         fibonnaci(index, arr);
//     }
// }

// B) Memoizing Fibonnaci

const fibonnaciByIndex = (index, arr = [1,1]) => {

    if (arr[index]) {
        return arr[index];
    }
    else {
        arr.push(addNumber(arr[arr.length - 1], arr[arr.length - 2]));
        fibonnaci(index, arr);
    }
}

const fibonnaciMemoized = () => {
    let saved = {};
    return (index) => {
        if (index in saved) {
            return saved[index];
        }
        else {
            let result = fibonnaciByIndex(index);
            saved[index] = result;
            return result;
        }
    }
}

const fibonnaci = fibonnaciMemoized();

module.exports = fibonnaci;
