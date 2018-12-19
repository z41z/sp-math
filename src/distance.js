const distance = (p1 = [0, 0], p2 = [0, 0]) => {
  return Math.hypot(p1[0] - p2[0], p1[1] - p2[1]).toFixed(2);
};

module.exports.default = module.exports = distance;