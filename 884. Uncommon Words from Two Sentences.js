/**
 * The almost one liner solution.
 *
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = (A, B) => {
    const concat = A.split(' ').concat(B.split(' '));
    return concat.filter(item => concat.lastIndexOf(item) == concat.indexOf(item));
};

/**
 * The clear solution.
 *
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = (A, B) => {
  const splitA = A.split(' ');
  const splitB = B.split(' ');
  const concat = splitA.concat(splitB);

  return concat.filter(item => {
    return concat.lastIndexOf(item) == concat.indexOf(item);
  });
};
