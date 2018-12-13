const cos = require("../cos");
const sin = require("../sin");

/**
 * x,y旋转后坐标计算
 * @param {Number} _x 
 * @param {Number} _y 
 * @param {Number} degree 
 */
const rotateByDegree = (_x = 0, _y = 0, degree = 0) => {
  let x = _x * cos(degree) - _y * sin(degree)
  let y = _y * cos(degree) + _x * sin(degree)
  return {
    x,
    y
  }
};

module.exports.default = module.exports = rotateByDegree;