// object with scores
const scores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
  _: 0,
};

/*
Fn: Get Count of Letters
- input one string of misc/random letters/chars
- declare storage variable
- iterate input string to populate storage variable
- creates letter object
- outputs object with key-value pairs of letter to letter frequency
  */
function getLetterCount(word) {
  const letterCount = {};
  for (const letter of word) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  return letterCount;
}
// console.log(getLetterCount("SHEPPARDCODEWALKER"));

/*
PART 1
Fn: Determine If Word Passed as Param/Arg Can Be Made
- input/params two objects
--- lettersObj: an object that contains available letters in scrabble rack
--- inputObj: an object that contains the word you want to check against the rack
- checks if input can be created per available chars/letters in letters object
- return bool re: whether can make the word

PART 2
- declare variable for number of wildcards
- when wildcards among letter, assign number of wildcards to wildcards among letters
- when wildcards less than 1, return false
- decrement wildcards
  */
function canMakeWord(scrabbleRackObj, wordObj) {
  let wildcard = 0;
  if (scrabbleRackObj["_"]) {
    wildcard = scrabbleRackObj["_"];
  }

  for (const [key, value] of Object.entries(wordObj)) {
    if (!scrabbleRackObj[key] || value > scrabbleRackObj[key]) {
      if (wildcard < 1) {
        return false;
      }
      wildcard--;
    }
  }
  return true;
}
// const scrabbleRackObj = getLetterCount("DECOCRETORA");
// const wordObj = getLetterCount("CREATING");
// console.log(canMakeWord(scrabbleRackObj, wordObj));

const words = ["STING", "STUNG", "RING", "RUNG", "VERY", "WELL", "DONE"];
/*
PART 1
Fn: Output Valid Words
- input a string
- storage for words made
- creates letter to letter frequency object for letters available 
- iterate words of array
- creates letter to letter frequency object for each word in data source array
- checks if word(s) can be created from letters available
- store words made
- return words stored

PART 2
Fn: Output Respective Scores with Valid Words
- declare variable to store score
- storage for words with scores
- iterate valid words for each word
- iterate each word for each letter
- re-assign score to tally per letter
- store word with its score
- return array containing word with its score 
  */
function getValidWords(availableLetters) {
  const validWords = [];

  const availableLettersObj = getLetterCount(availableLetters);
  for (const word of words) {
    const wordObj = getLetterCount(word);

    if (canMakeWord(availableLettersObj, wordObj)) {
      validWords.push(word);
    }
  }

  const wordsScored = [];
  for (const word of validWords) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter];
    }
    wordsScored.push({ word: word, score: score });
  }
  return wordsScored;
}
console.log(getValidWords("ERWE_VNSTO"));
