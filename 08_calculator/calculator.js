const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a < b ? b - a : a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
}

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(number, pow) {
  return Math.pow(number, pow);
};

const factorial = function(number) {
	if (number === 0) return 1;

  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
