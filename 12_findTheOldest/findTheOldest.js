const findTheOldest = function(peopleArray) 
{
    return peopleArray.reduce((oldest, current) =>
    {
        const oldestAge = agesLived(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = agesLived(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    });
};

const agesLived = function(birthYear, deathYear)
{
    if (!deathYear) { deathYear = new Date().getFullYear(); }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
