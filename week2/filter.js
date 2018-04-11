const filter = (array, fn) => {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let current_value = array[i];
        if (fn(current_value)) newArray.push(current_value);
    }

    return newArray;

}

module.exports = filter;
