const removeFromArray = function(array, ...elementsToBeRemoved) {
    const filteredArray = array.filter((item) => !elementsToBeRemoved.includes(item));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
