const removeFromArray = function(arrayToRemove) {

    for (let i = 1; i < arguments.length; i++){
        // loop removing value till value is not contained
        let value = arguments[i];
        for (let index = arrayToRemove.indexOf(value); index > -1; index = arrayToRemove.indexOf(value)){
            arrayToRemove.splice(index, 1);
        }
    }
    return arrayToRemove;
};

// Do not edit below this line
module.exports = removeFromArray;
