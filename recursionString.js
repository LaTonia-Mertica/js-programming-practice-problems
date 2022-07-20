/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Copy and SaveGet Link
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

VISUALIZE THE CODE:
https://pythontutor.com/render.html#mode=display
*/

const reverseString = function (s) {
  if (s.length == 0) {
    return [];
  }

  const temp = s[0];
  s.shift();
  // makes solution recursive
  reverseString(s);
  s.push(temp);

  return s;
};
console.log(reverseString(["h", "e", "n", "r", "y"]));
console.log("yrneh: reciprocal unit of measurement for electrical inductance");

// non recursive
function strReversed(str) {
  return str.reverse();
}
console.log("\n");
console.log(strReversed(["m", "a", "i", "l"]));
console.log(
  'origin: Liam is an Irish name meaning "strong-willed warrior" and "protector." It is the shortened version of the Irish name Uilliam, meaning "helmet of will." Gender: Liam has traditionally been used for baby boys.\n'
);
