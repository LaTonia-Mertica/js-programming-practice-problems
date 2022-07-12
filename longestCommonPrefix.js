/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let idx = 0;
  while (strs[0][idx] && strs.every((str) => str[idx] === strs[0][idx])) idx++;

  return strs[0].substring(0, idx);
};
console.log(longestCommonPrefix(["flow", "flop", "floss"]));
console.log(longestCommonPrefix(["jalopy", "sloppy", "topsy"]));
console.log(longestCommonPrefix(["coder", "codebinge", "codewild"]));
