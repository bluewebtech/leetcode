/**
 * The almost one liner solution.
 *
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = (A, B) => {
  const concat = A.split(' ').concat(B.split(' '));
  return concat.filter(item => concat.lastIndexOf(item) === concat.indexOf(item));
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
    return concat.lastIndexOf(item) === concat.indexOf(item);
  });
};

/**
 * The clear solution.
 *
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = (A, B) => {
  const arrayA = A.split(' ');
  const arrayB = B.split(' ');
  const concat = arrayA.concat(arrayB);
  const cleaned = [...new Set(concat)];
  const singles = [];

  cleaned.forEach((cleanedItem) => {
    const check = concat.filter(concatItem => concatItem === cleanedItem);

    if (check.length === 1) {
      singles.push(cleanedItem);
    }
  });

  return singles;
};
