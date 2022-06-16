const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    const peopleAges = people.sort(function(a, b){
        if(!("yearOfDeath" in a)){
            a.yearOfDeath = currentYear;
        }
        else if (!("yearOfDeath" in b)){
            b.yearOfDeath = currentYear;
        }
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        
        return bAge - aAge
    });
    return peopleAges[0];
}

// Do not edit below this line
module.exports = findTheOldest;
