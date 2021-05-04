/**
 * 26. Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * The clear solution.
 *
 * @param {Number[]} nums
 * @return {Number}
 */
const removeDuplicates = (nums) => {
  let total = 0;
  let last = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== last) {
      nums[total] = nums[i];
      last = nums[i];
      total++;
    }
  }

  return total;
};
