const palindromes = function (string) {
    const initString = string.replaceAll(/[^a-zA-Z]/g, "").toLowerCase();
    const reverse = initString.split("").reverse().join("");
    return initString === reverse ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
