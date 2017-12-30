'use strict';

/**
 * @function Generate a Global Unique Identifier
 * @param {Number} len - length 
 * @returns {String}
 */
var guid = function guid(len) {
    var arr = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        length = len || 32;

    for (var i = 0; i < length; i++) {
        arr[i] = chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return arr.join('');
};

module.exports = guid;