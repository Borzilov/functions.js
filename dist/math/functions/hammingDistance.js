'use strict';

/**
 * @function Calculate hamming distance
 * @param {*} number1 
 * @param {*} number2 
 */
var hammingDistance = function hammingDistance(number1, number2) {
  return ((number1 ^ number2).toString(2).match(/1/g) || '').length;
};

module.exports = hammingDistance;