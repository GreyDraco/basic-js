const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeat = options.repeatTimes || 1;

  let separator = "+";
  if (options.separator !== undefined) {
    separator = String(options.separator);
  }
  let addition = "";
  if (options.addition !== undefined) {
    addition = String(options.addition);
  }
  const additionRepeat = options.additionRepeatTimes || 1;
  let additionSeparator = "|";
  if (options.additionSeparator !== undefined) {
    additionSeparator = String(options.additionSeparator);
  }
  const additionString = Array(additionRepeat)
    .fill(addition)
    .join(additionSeparator);
  return Array(repeat)
    .fill(str + additionString)
    .join(separator);
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
