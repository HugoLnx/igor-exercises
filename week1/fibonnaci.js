const addNumber = (a, b) => a + b;

const fibonnaci = (index, arr = [1,1]) => {

    if (arr[index]) {
        return arr[index];

    }
    else {
        arr.push(addNumber(arr[arr.length - 1], arr[arr.length - 2]));
        fibonnaci(index, arr);
    }

}

module.exports = fibonnaci;




