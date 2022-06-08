const removeFromArray = function() {
    let i; 
    let array = arguments[0];
    let len = arguments.length;

    for (i = 1; i < len; i++){

        if (array[array.indexOf(arguments[i])] !== arguments[i]){
            continue;
        }
        else {
            array.splice(array.indexOf(arguments[i]), 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
