const repeatString = function(string, num) {
    // let string = 'hey'
    if(num < 0) return "ERROR"
    let result = '';
    for(let i=0; i<num; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
