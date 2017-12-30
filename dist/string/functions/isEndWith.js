'use strict';

var string_util = require('./util/isString');

/**
 * @function isEndWidth: String ends with target.
 * @param {String} str 
 * @param {String} target 
 * @returns {Boolean} 
 */
var isEndWith = function isEndWith(str, target) {
    if (target) {
        string_util.isString(str);
        return str.substr(-target.length) === target ? true : false;
    }
};

module.exports = isEndWith;