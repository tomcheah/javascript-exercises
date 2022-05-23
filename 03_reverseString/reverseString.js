const reverseString = function(string) {
    let splitString = string.split("");
    var reverseStringArray = splitString.reverse();
    return reverseStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
