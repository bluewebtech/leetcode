/**
 * The quick one liner solution.
 *
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
};
