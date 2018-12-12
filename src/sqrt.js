const sqrt = (val, isDeep = false) => {
  if (val < 0) {
    return 0;
  }
  let result = Math.sqrt(val);
  if (isDeep) {
    return [result, -result];
  }
  return result;
};

module.exports.default = module.exports = sqrt;