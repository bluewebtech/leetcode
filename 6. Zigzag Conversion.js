/**
 * 6. Zigzag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/
 */

/**
 * The clear solution.
 *
 * @param {String} s
 * @param {Number} numRows
 * @return {String}
 */
 const convert = (s, numRows) => {
  if (numRows === 1) return s;

  const result = [...Array(numRows)].map(x => []);
  let current = 1;
  let flag = true;

  for (let a = 0; a < s.length; a++) {
    result[current - 1].push(s[a]);

    if (flag) {
      current++;

      if (current > numRows) {
        current = numRows - 1;
        flag = false;
      }
    } else {
      current--;

      if (current < 1) {
        current = 2;
        flag = true;
      }
    }
  }

  return result.flat().join('');
};
