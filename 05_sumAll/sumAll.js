const sumAll = function(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return 'ERROR';
    } else if (a < 0 || b < 0) {
        return 'ERROR';
    }

    let largerNumber = Math.max(a,b);
    let smallerNumber = Math.min(a,b);
    let sum = 0;
    for (let i = smallerNumber; i < largerNumber+1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
