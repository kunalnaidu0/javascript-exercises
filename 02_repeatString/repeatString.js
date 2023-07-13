const repeatString = function(string, num) {
    // if num is less than zero return error
    if (num < 0){
        return 'ERROR';
    } else {
        // create empty string and concatenate to string for desired number
        let finalString = "";
        for (let i = 0; i < num ; i++){
            finalString += string;
        }
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
