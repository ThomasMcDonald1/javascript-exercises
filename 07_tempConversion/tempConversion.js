const convertToCelsius = function(fromFahrenheight) 
{
  // rounding explained by MarkG's answer: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  return +(Math.round(((fromFahrenheight - 32) * (5/9)) + "e+1") + "e-1");
};

const convertToFahrenheit = function(fromCelcius) 
{
  return +(Math.round(((fromCelcius * (9/5)) + 32) + "e+1") + "e-1");
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
