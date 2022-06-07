const repeatString = function(string, num) {
    let i;
    let res = string;

    if (num == 0){
        return "";
    }

    else if (num < 0){
        return "ERROR";
    }

    for (i=1; i<num; i++){
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
