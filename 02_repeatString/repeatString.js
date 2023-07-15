const repeatString = function(stringToRepeat, numRepeats) 
{
    if (numRepeats < 0) { return "ERROR"; }
    let repeat = "";
    for (let i = 0; i < numRepeats; i++)
    {
        repeat = repeat.concat(stringToRepeat);
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
