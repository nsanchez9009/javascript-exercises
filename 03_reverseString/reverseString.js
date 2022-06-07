

const reverseString = function(string) {
    let len = string.length
    let i;
    let res = "";

    for (i=0; i<len; i++){
        res += string[(len - 1) - i];
    }
    return res;

};

// Do not edit below this line
module.exports = reverseString;
