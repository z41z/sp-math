const degreeToRotate = require("./common/degreeToRotate");

/**
 * 
 * @param {Number} degree 
 */
const cos = (degree) => {
  return Math.cos(degreeToRotate(degree));
};

module.exports.default = module.exports = cos;