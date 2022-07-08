/**
 * 14. Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/
 */

/**
 * The clear solution.
 *
 * @param {String[]} strs
 * @return {String}
 */
 const longestCommonPrefix = (strs) => {
  const lengths = strs.map(item => item.length);
  const index = lengths.findIndex(item => item === Math.min(...lengths));
  const shortest = strs[index].split('');
  const combos = [];

  shortest.forEach((item, key) => {
    combos.push(
      key === 0
        ? item
        : `${combos[key - 1]}${item}`
    );
  });

  console.log(combos);
};