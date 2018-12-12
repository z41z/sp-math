const rotateToDegree = require("./common/rotateToDegree");

/**
 * 
 * @param {Number} val 
 */
const asin = (val) => {
  return rotateToDegree(Math.asin(val));
};

module.exports.default = module.exports = asin;