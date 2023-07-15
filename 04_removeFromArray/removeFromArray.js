const removeFromArray = function(arr, ...toRemove) 
{
    const removedElements = new Array();

    for (let i = 0; i < arr.length; i++)
    {
        if (!toRemove.includes(arr[i]))
        {
            removedElements.push(arr[i]);
        }
    }

    return removedElements;
};

// Do not edit below this line
module.exports = removeFromArray;
