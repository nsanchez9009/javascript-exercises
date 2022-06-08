const ftoc = function(temp) {
  let res = ((temp - 32) * 5) / 9;
  
  if (res === 0){
    return 0;
  }

  return Math.round(res * Math.pow(10, 1)) / Math.pow(10, 1);
};

const ctof = function(temp) {
  let res = ((temp * 9) / 5) + 32;

  if (res === 0){
    return 0;
  }

  return Math.round(res * Math.pow(10, 1)) / Math.pow(10, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
