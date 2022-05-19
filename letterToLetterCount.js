/*
THE GOAL IS TO:
- create function
- check that input meets criteria
- return prompt to enter correct type of input when needed
- create storage for obj/dict to output
- take a string
- split the string
- loop through array of letters
- assign variable value of letter
- handle inconsistent casing
- handle invalid characters
- skip invalid chars
- use the letter as key in obj/dict
- count the occurrences of the letter in the string
- use the count as the value for each letter
- return obj/dict for output
- console log output

note: this is practice for solving the first part of scrabble solver .. . thanks danny🤓
*/

function getLetterToLetterCount(word) {
  if (typeof word !== "string") {
    return "Please Enter a Valid Value!";
  }
  const wordObj = {};
  const wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
    const letter = wordArr[i].toLowerCase();
    const invalidChar = [" ", "'"];
    if (invalidChar.includes(letter)) {
      continue;
    }
    if (wordObj[letter] === undefined) {
      wordObj[letter] = 1;
    } else {
      wordObj[letter]++;
    }
  }
  return wordObj;
}
console.log(getLetterToLetterCount("apple"));
