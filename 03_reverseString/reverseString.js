const reverseString = function(string) {
    let arr=  string.split('');
    if(string=='') return ''
    //now rev the array
    let i=0;
    let j = arr.length;
    while(i<=j) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
