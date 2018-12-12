const isFloat = require("./common/isFloat");
const devideFloat = require("./common/devideFloat");
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 */
const pow = (x, y, isDeep = false) => {
  if (y < 0) {
    return 0;
  }
  if (isDeep && isFloat(y)) {
    let result = [];
    let {
      c,
      m
    } = devideFloat(y);
    let pow = Math.pow(Math.abs(x), 1 / m);
    let powc = Math.pow(pow, c);
    if (m % 2 === 0) {
      result = x > 0 ? (c % 2 === 0 ? powc : [powc, -powc]) : 0;
    } else {
      result = x > 0 ? powc : (c % 2 === 0 ? powc : -powc);
    }
    return result;
  }
  return Math.pow(x, y);
};

module.exports.default = module.exports = pow;