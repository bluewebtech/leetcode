/**
 * 13. Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/
 */

/**
 * The numerals collection.
 *
 * @var {Object}
 */
const numerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * The simply yet still ping pong solution.
 *
 * @param {String} s
 * @return {Number}
 */
const romanToInt = (s) => {
  if (s == null) {
    return -1;
  };

  let num = numerals[s.charAt(0)];
  let pre, curr;

  for (let i = 1; i < s.length; i++) {
    curr = numerals[s.charAt(i)];
    pre = numerals[s.charAt(i - 1)];

    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
};
