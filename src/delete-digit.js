const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringN = String(n);
  for (let i = 0; i < stringN.length - 1; i += 1) {
    if (stringN[i] < stringN[i + 1]) {
      return +stringN.slice(0, i).concat(stringN.slice(i + 1));
    }
  }
  return +stringN.slice(0, -1);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit,
};
