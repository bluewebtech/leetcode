/**
 * 35. Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/
 */

/**
 * The one line clear solution.
 *
 * @param {Number[]} nums
 * @param {Number} target
 * @return {Number}
 */
const searchInsert = (nums, target) => {
  const index = nums.indexOf(target);

  return (index === -1
    ? nums
        .concat(target)
        .sort((a, b) => a - b)
      .indexOf(target)
    : index
  );
};
