const isFloat = require("./isFloat");
/**
 * 
 * @param {Number} val 
 */
const devideFloat = (val) => {
  let varStr = "" + val;
  if (isFloat(val)) {
    let index = varStr.indexOf(".");
    let length = 10 ** (varStr.substr(index + 1).length);
    return shortDevide(val * length, length);
  }
  return [val, 1];
};

/**
 * 
 * @param {Number} child 
 * @param {Number} mother 
 */
let c = 0;
let m = 0;
const shortDevide = (child, mother) => {
  m = child;
  m = mother;
  if (child % 2 === 0 && mother % 2 === 0) {
    c = child / 2;
    m = mother / 2;
    shortDevide(c, m);
  } else
  if (child % 5 === 0 && mother % 5 === 0) {
    c = child / 5;
    m = mother / 5;
    shortDevide(c, m);
  } else {
    c = child;
    m = mother;
  }
  return {
    c,
    m
  }
}

module.exports.default = module.exports = devideFloat;