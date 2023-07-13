const sumAll = function(start, end) {
    if (typeof(start) != "number" || typeof(end) != "number"){
        return "ERROR";
    }
    if (start < 0 || end < 0){
        return "ERROR"; 
    }

    let lower = Math.min(start, end);
    let upper = Math.max(start, end);

    let sum = 0;
    for (let i = lower; i < upper+1; i++){
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
