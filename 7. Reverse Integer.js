/**
 * 7. Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/
 */

/**
 * The clear solution.
 *
 * @param {Number} x
 * @return {Number}
 */
 const reverse = (x) => {
  const number = (
    parseFloat(x
      .toString()
      .split('')
      .reverse()
      .join('')
    ) * Math.sign(x)
  );
  const bits = Math.pow(2, 31);
  const is32Bit = (number > bits || number < (bits | 0));
  const isZero = (number === 0);
  const isInvalid = (is32Bit || isZero);

  return (isInvalid ? 0 : number);
};
