const rotateToDegree = require("./common/rotateToDegree");

/**
 * 
 * @param {Number} val 
 */
const atan = (val) => {
  return rotateToDegree(Math.atan(val));
};

module.exports.default = module.exports = atan;