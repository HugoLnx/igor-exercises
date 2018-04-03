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

// C) Memoizing Fibonnaci

// const fibonnaciByIndex = (index, arr = [1,1]) => {
//
//     if (arr[index]) {
//         return arr[index];
//     }
//     else {
//         arr.push(addNumber(arr[arr.length - 1], arr[arr.length - 2]));
//         fibonnaciByIndex(index, arr);
//     }
// }
//
// const fibonnaciMemoized = () => {
//     let saved = {};
//     return (index) => {
//         if (index in saved) {
//             return saved[index];
//         }
//         else {
//             let result = fibonnaciByIndex(index);
//             saved[index] = result;
//             return result;
//         }
//     }
// }
//
// const fibonnaci = fibonnaciMemoized();

// D) Non Recursive Fibonnaci

const fibonnaciByIndex = (index) => {

    let arr = [1,1];

    for (let i = 2; i <= index; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    return arr[arr.length - 1];

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
