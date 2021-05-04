/**
 * 1. Two Sum
 *
 * https://leetcode.com/problems/two-sum/
 */

/**
 * The clear solution.
 *
 * @param {Number[]} nums
 * @param {Number} target
 * @return {Number[]}
 */
const twoSum = (nums, target) => {
  let keys = [];

  nums.forEach((item, key) => {
    nums.forEach((numItem, numKey) => {
      const sum = (item + numItem);
      const diffKeys = (key !== numKey);
      const previousKey = (key < numKey);
      const isTarget = (sum === target);
      const validate = (diffKeys && previousKey && isTarget);

      if (validate) {
        keys = [key, numKey];
      }
    });
  });

  return keys;
};
