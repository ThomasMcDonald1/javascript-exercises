const fibonacci = function(fibonacciVal) {
    if (fibonacciVal < 1) { return "OOPS"; }
    let prev1 = 0;
    let prev2 = 0;
    let next;

    for (let i = 0; i < fibonacciVal; i++)
    {
        next = prev1 + prev2;
        if (next === 0) { next = 1; }
        prev1 = prev2;
        prev2 = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
