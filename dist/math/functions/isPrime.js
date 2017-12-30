"use strict";

/**
 * @function Check if a number is prime
 * @param {Number} number
 * @returns {Boolean} 
 */
var isPrime = function isPrime(number) {
    var divisor = 2;
    while (number > divisor) {
        if (number % divisor === 0) return false;else divisor++;
    }
    return true;
};

module.exports = isPrime;