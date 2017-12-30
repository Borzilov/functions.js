const string_util = require('./util/isString');

/**
 * @function Count the number of vowels in a string
 * @param {*} str 
 */
const countVowels = str => {
    string_util.isString(str);
    let vowels = 'aeiouAEIOU', count = 0;
    str = str.trim().split("");
    str.forEach((val) => {
      if(vowels.indexOf(val) !== -1)
        count++;
    });
    return count;
}

module.exports = countVowels