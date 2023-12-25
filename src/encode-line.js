const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = "";
  let counter = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      counter += 1;
    } else {
      if (counter === 1) {
        encodedStr += str.charAt(i);
      } else {
        encodedStr += counter + str.charAt(i);
        counter = 1;
      }
    }
  }
  return encodedStr;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
