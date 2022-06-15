/*
isSubstring

Input
1) A String, called searchString.
2) A String, called subString.

Output: A Boolean. true if the subString is a part of the searchString.

> isSubstring("time to program", "time")
true

> isSubstring("Jump for joy", "joys")
false

NOTE: this challenge courtesy App Academy https://open.appacademy.io/learn/full-stack-online/javascript/intro-javascript-problems--part-1-
*/
function isSubstring(searchString, subString) {
  if (subString.includes(searchString)) {
    return true;
  } else {
    return false;
  }
}
console.log(isSubstring("Code", "Hello Code World!"));
