const sumAll = function(int1, int2) {

    let big, small;
    let sum = 0;

    if (int1 < 0 || int2 < 0){
        return "ERROR";
    }

    else if (!Number.isInteger(int1) || !Number.isInteger(int2)){
        return "ERROR"
    }

    else if (int1 < int2){
        small = int1;
        big = int2;
    }
    else {
        small = int2;
        big = int1;
    }

    while (small <= big){
        sum += small;
        small++;
    }

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
