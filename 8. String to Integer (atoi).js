/**
 * The quick one liner solution.
 *
 * @param {String} str
 * @return {Number}
 */
const myAtoi = (str) => {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
};
