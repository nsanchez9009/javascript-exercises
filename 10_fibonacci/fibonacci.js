const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    
    const array = [1];
    let sum = 1;
    let prev = 0;

    for (let i = 1; i < number; i++){
        sum += prev;
        array[i] = sum;
        prev = array[i - 1];
    } 
    return array[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
