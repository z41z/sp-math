const degreeToRotate = require("./common/degreeToRotate");

/**
 * 
 * @param {Number} degree 
 */
const sin = (degree) => {
  return Math.sin(degreeToRotate(degree));
};

module.exports.default = module.exports = sin;