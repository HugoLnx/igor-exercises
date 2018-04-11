const reduce = (array, fn) => {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result = fn(result, array[i]);
    }
    return result;
}

module.exports = reduce;
