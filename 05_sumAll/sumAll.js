const sumAll = function(num1, num2) {
    let sum = 0;
    if(num1<0 || num2<0)  {
        return 'ERROR';
    }
    // if(typeof num1!=='number' || typeof num2 !== 'number') {
    //     return 'ERROR';
    // }

    if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    let num = Math.min(num1,num2); 
    while(num<=Math.max(num1,num2)) {
        sum += num;
        num++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
