const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    } 

    let ret = "";
    for (let i = 0; i < times; i++) {
        ret += word;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
