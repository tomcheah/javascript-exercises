const removeFromArray = function(arr) {
    let args = Array.from(arguments);
    for (let i = 0; i < args.length; i++) {
        arr = arr.filter(item => item !== args[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
