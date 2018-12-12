/**
 * 
 * @param {Number} val 
 */
const isFloat = (val = 0) => {
  let target = +val;
  if (Boolean(target)) {
    target = "" + target;
    if (target.indexOf(".") > 0) {
      return true;
    }
  }
  return false;
};

module.exports.default = module.exports = isFloat;