/*
  - fn to get count of letter by word
  - input string
  - output is obj w/letter as key and value as its occurrence
  */
// function getLetterCountOfWord(str) {
function getLetterCountOfWord(str) {
  const letterCountObj = {};

  for (const letter of str) {
    // for (let i = 0; i < str.length; i++) {
    //   const letter = str[i];
    if (!letterCountObj[letter]) {
      letterCountObj[letter] = 1;
    } else {
      letterCountObj[letter]++;
    }
  }
  return letterCountObj;
}
console.log(getLetterCountOfWord("BENANAS"));

/*
- fn to check if a certain word can be created from the available letters in the obj
- input two objs
----- random scrabble letters
----- letters of inputted string

- output is a bool
----- based on if there re enough letters

- return true if can create the word from letters available
*/
const scrabbleWordObj = getLetterCountOfWord("SCRUNANASEBA");
const validWordObj = getLetterCountOfWord("BANANA");

function wordCanBeCreated(scrabbleWordObj, validWordObj) {
  for (const [key, value] of Object.entries(validWordObj)) {
    if (!scrabbleWordObj[key] || scrabbleWordObj[key] < value) {
      return false;
    }
  }
  return true;
}
console.log(wordCanBeCreated(scrabbleWordObj, validWordObj));
