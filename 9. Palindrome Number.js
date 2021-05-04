/**
 * 9. Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/
 */

/**
 * The one line clear solution.
 *
 * @param {Number} x
 * @return {Boolean}
 */
const isPalindrome = (x) => {
  const swap = Number(x
      .toString()
      .split('')
      .reverse()
      .map(item => item)
      .join('')
    )
  ;

  return (swap === x);
};
