const sumAll = function(val1, val2) 
{
    // Check if there's an error with the two values first (non-numbers or less than 0)
    // realized that if a string is passed in as a number like "90", isNaN still evaluates it as false even though
        // the type is a string... so we need to use typeof for checking strings here as well...
    if (isNaN(val1) || typeof val1 === "string" || isNaN(val2) || typeof val2 === "string" || val1 < 0 || val2 < 0) 
    { return "ERROR"; }

    // tertiary to assign the starting value depending on which parameter is less than (or equal) to the other
    let sumStart = val1 <= val2 ? val1 : val2;

    // if sumStart equals val1, set it to val2. otherwise set it to val1 (ensures it's the larger val if there is one)
    let sumEnd = sumStart === val1 ? val2 : val1;

    // loop through the two values, adding each integer to the starting (lesser value)
    for (let i = sumStart+1; i <= sumEnd; i++)
    {
        sumStart += i;
    }
    return sumStart;
};

// Do not edit below this line
module.exports = sumAll;
