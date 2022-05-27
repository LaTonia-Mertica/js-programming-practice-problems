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

// can we refactor our for loop to use object.keys instead

function getLetterToLetterCount(word) {
  const wordObj = {};
  let letterArr = word.split("");
  for (let i = 0; i < letterArr.length; i++) {
    const letter = letterArr[i];
    if (wordObj[letter] === undefined) {
      wordObj[letter] = 1;
    } else {
      wordObj[letter]++;
    }
  }
  return wordObj;
}
console.log(getLetterToLetterCount("apple"));

/*
THE GOAL IS TO:
- fn that accepts two letter objects
- in fn there must be enough random letters to create sought word  ... this requires a count of valid letters available to create the word
- fn returns a boolean that states true or false that can make the word with available letters
*/
const scrabbleLetters = getLetterToLetterCount("awepples");
const validWord = getLetterToLetterCount("apples");
function canWordBeCreated(scrabbleLetters, validWord) {
  let canCreateWord = true;
  for (const [key, value] of Object.entries(validWord)) {
    if (scrabbleLetters[key] === undefined || scrabbleLetters[key] < value) {
      canCreateWord = false;
      break;
    }
  }
  return canCreateWord;
}
console.log(canWordBeCreated(scrabbleLetters, validWord));
