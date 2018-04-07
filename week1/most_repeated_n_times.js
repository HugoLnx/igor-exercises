const saveRepeated = (item, obj) => {

    if (item in obj) {
        obj[item]['repetition']++;
    }
    else {
        obj[item] = {n: item, repetition: 1};
    }
    obj['mrepeat'] = compareRepetition(obj[item], obj['mrepeat']);

    return obj;
}

const compareRepetition = (item1, item2) => {

    let itemFinal;
    if (item1['repetition'] > item2['repetition']) {
        itemFinal = item1;
    }
    else if (item1['repetition'] == item2['repetition']) {
        if (item1['n'] > item2['n']) {
            itemFinal = item1;
        }
        else {
            itemFinal = item2;
        }
    }
    else {
        itemFinal = item2;
    }

    return itemFinal;
}

const mostRepeated = (array, times, obj = {'mrepeat': {n: 0, repetition: 0}}) => {

    let newArray = array.slice(1);

    if (array.length > 0) {

        let newObj = saveRepeated(array[0], obj);
        mostRepeated(newArray, index, newObj);

    }
    
    return obj['mrepeat'];
}

module.exports = mostRepeated;