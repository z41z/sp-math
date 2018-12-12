const degreeToRotate = require("./common/degreeToRotate");

/**
 * 
 * @param {Number} degree 
 */
const tan = (degree) => {
  if (degree % 90 === 0 && degree > 0) {
    return Infinity;
  }
  return Math.tan(degreeToRotate(degree));
};

module.exports.default = module.exports = tan;