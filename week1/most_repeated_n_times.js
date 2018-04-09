const getByRepetition = (obj, repetition) => {

    let array = [];

    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (obj[Object.keys(obj)[i]]['repetition'] == repetition) {
            array.push(parseInt(Object.keys(obj)[i]));
        }
    }

    return array;

}

const mostRepeatedNTimes = (array, repetition) => {

    let obj = {};

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i]

        if (obj[currentElement]){
            obj[currentElement]['repetition']++;
        }
        else {
            obj[currentElement] = {};
            obj[currentElement]['repetition'] = 1;
        }

    }

    return getByRepetition(obj, repetition);

}

module.exports = mostRepeatedNTimes;
