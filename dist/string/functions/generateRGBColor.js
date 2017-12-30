"use strict";

/**
 * @function Generate random RGB color
 */
var generateRGBColor = function generateRGBColor() {
  return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
};

module.exports = generateRGBColor;