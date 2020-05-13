/**
 * The sequence collection.
 *
 * @var {Array}
 */
const collection = [
  1,
  11,
  21,
  1211,
  111221,
];

/**
 * The brute force solution.
 *
 * @param {Number} n
 * @return {String}
 */
var countAndSay = (n) => {
  const item = collection[n - 1];
  return (item !== undefined ? item.toString() : null);
};
