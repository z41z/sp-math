const rotateToDegree = require("./common/rotateToDegree");

/**
 * 
 * @param {Number} val 
 */
const acos = (val) => {
  return rotateToDegree(Math.acos(val));
};

module.exports.default = module.exports = acos;