/**
 * tras comma
 * @param {String||Number} value 
 * @param {*} obj 
 */
const comma = (value = '', obj = {}) => {
  let {
    fixedLen = 2, hasComma = false
  } = obj;

  // add comma
  if (hasComma && (+value)) {
    let fixed = (+value).toFixed(fixedLen).split('.');
    if (fixedLen > 0) {
      return `${(+fixed[0]).toLocaleString()}.${fixed[1]}`;
    } else {
      return (+fixed[0]).toLocaleString();
    }

  // remove comma
  } else {
    let num = +((value.toString()).replace(/\,/ig, ''));
    return num ? num.toFixed(fixedLen) : (0).toFixed(fixedLen)
  }
}

module.exports.default = module.exports = comma;