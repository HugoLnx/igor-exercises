const groupby = (array, fn) => {

    var group = {};

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let key = fn(current);
        if (group[key]) {
            group[key].push(current);
        }
        else {
            group[key] = [current];
        }
    }

    return group;

}

module.exports = groupby;
