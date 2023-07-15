const reverseString = function(stringToReverse) 
{
    let reversed = "";
    for (let i = stringToReverse.length-1; i >= 0; i--)
    {
        reversed += stringToReverse[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
