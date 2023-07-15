const leapYears = function(year) 
{
    // if the year is divisible by 4, should be no remainder
    if (year % 4 === 0)
    {
        // also need to check if the year is divisible by 400. If it is, return true. If not divisible by 400, we need to also check if it's a century year.
        // If it it not a century year, return true.
        if (year % 400 === 0 || year % 100 != 0)
        {
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
