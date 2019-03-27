/**
 * tras comma
 * @param {String||Number} value 
 * @param {*} obj 
 */
const comma = (value = '', obj = {}) => {
  let {
    fixed = 2, hasComma = false
  } = obj;

  // add comma
  if (hasComma && (+value)) {
    let fix = (+value).toFixed(fixed).split('.');
    if (fixed > 0) {
      return `${(+fix[0]).toLocaleString()}.${fix[1]}`;
    } else {
      return (+fix[0]).toLocaleString();
    }

  // remove comma
  } else {
    let num = +((value.toString()).replace(/\,/ig, ''));
    return num ? num.toFixed(fixed) : (0).toFixed(fixed)
  }
}

module.exports.default = module.exports = comma;