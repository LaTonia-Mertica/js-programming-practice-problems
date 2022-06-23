/*
a, e -> true
ad, eg -> true
add, egg -> true
adda, eggy -> false

HINTS:
- create word when its letters are replaced with letters of another word
- must be same length
- must handle repeat letters
- treat the letters and generic characters to make code dynamic
- refer to indexes of letters in their appearance order
 */

// fn w/two params
// each param is a string
function isIsomorphic(s, t) {
  // if diff lengths cannot be mapped
  if (s.length !== t.length) {
    return false;
  }

  // obj to track letters
  const mapLettersSToT = {};
  const mapLettersTToS = {};

  // for loop to access each letter of each param
  for (let i = 0; i < s.length; i++) {
    // sync index of each param
    const sLetter = s[i],
      tLetter = t[i];

    // if letter in first string not in obj
    if (!mapLettersSToT[sLetter]) {
      // assign key in obj for that letter to value of current letter in other string
      mapLettersSToT[sLetter] = tLetter;
      // otherwise check if letter of first string is not equal to letter of other string
    } else if (mapLettersSToT[sLetter] !== tLetter) {
      return false;
    }

    // same checks in opposite direction between strings
    if (!mapLettersTToS[tLetter]) {
      mapLettersTToS[tLetter] = sLetter;
    } else if (mapLettersTToS[tLetter] !== sLetter) {
      return false;
    }
  }
  // when criteria met
  return true;
}
console.log(isIsomorphic("egg", "odd")); // true
console.log(isIsomorphic("ege", "obo")); // true
console.log(isIsomorphic("ease", "hard")); // false
console.log(isIsomorphic("opportune", "accoutant")); // false
console.log(isIsomorphic("deeds", "bread")); // false
console.log(isIsomorphic("pap", "tip")); // false

console.log(isIsomorphic("sip", "pup")); // false
console.log(isIsomorphic("pup", "sip")); // false
