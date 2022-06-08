function divide400(year){
    if (year%400 == 0){
        return true;
    }
    else {
        return false;
    }
}

function divide100(year){
    if (year%100 == 0){
        return true;
    }
    else {
        return false;
    }
}


function divide4(year){
    if (year%4 == 0){
        return true;
    }
    else {
        return false;
    }
}


const leapYears = function(year) {

    switch (true) {
        case !divide4(year):
            return false;
        case !divide100(year):
            return true;
        case !divide400(year):
            return false;
        default:
            return true;
    }

};


// Do not edit below this line
module.exports = leapYears;
