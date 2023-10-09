const add = function(firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(arr) {
	return arr.reduce((toSum, toUpdate) => toSum + toUpdate, 0);
};

const multiply = function() {
  return Array.from(arguments).reduce((toMultiply, toUpdate) => toMultiply * toUpdate, 1);
};

const power = function(base, exponent) {
  let startVal = 1;
  for (let i = 0; i < exponent; i++)  
    startVal *= base; 
    
  return startVal;
};

const factorial = function(n) {
  let startVal = 1;
	for (let i = 0; i < n; i++)
  {
    startVal *= i+1;
  }
  return startVal;
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
