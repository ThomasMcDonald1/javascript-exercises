const palindromes = function (palindromeCheck) {
    let isPalindrome = true;
    let delimiters = ", !.";
    for (let i = 0; i < delimiters.length; i++) { palindromeCheck = palindromeCheck.replaceAll(delimiters[i], ''); }
    //console.log(palindromeCheck);
    palindromeCheck = palindromeCheck.toLowerCase();
    for (let i = 0; i < palindromeCheck.length/2 && isPalindrome !== false; i++)
    {
        if (palindromeCheck[i] !== palindromeCheck[palindromeCheck.length-1-i])
            isPalindrome = false;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
