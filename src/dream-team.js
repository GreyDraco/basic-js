const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = "";
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i += 1) {
    if (!members[i] || typeof members[i] !== "string") {
      continue;
    } else {
      name += members[i].trim().charAt(0).toUpperCase();
    }
  }
  return name.split("").sort().join("");

  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam,
};
