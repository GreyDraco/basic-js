const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let compareString = s2;
  if (!s1 || !s2) return 0;
  for (let i = 0; i < s1.length; i += 1) {
    if (compareString.indexOf(s1.charAt(i)) !== -1) {
      count += 1;
      compareString = compareString
        .slice(0, compareString.indexOf(s1.charAt(i)))
        .concat(compareString.slice(compareString.indexOf(s1.charAt(i)) + 1));
    }
  }
  return count;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount,
};
