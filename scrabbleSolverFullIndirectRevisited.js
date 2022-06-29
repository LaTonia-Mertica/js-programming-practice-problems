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
- input one string
- creates letter object
- outputs object with key-value pairs of letter to letter frequency
  */
function getLetterCount(word) {
  const letterCountObj = {};
  for (const letter of word) {
    if (!letterCountObj[letter]) {
      letterCountObj[letter] = 1;
    } else {
      letterCountObj[letter]++;
    }
  }
  return letterCountObj;
}
// console.log(getLetterCount("OHHAPPYCODEDAYS"));

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
- when wildcard available, assign number of wildcards available to scores at wildcard 
- when number of wildcards less than 1 return false
- decrement wildcards
  */
function isValidWord(letterRackObj, wordObj) {
  let wildcards = 0;
  if (letterRackObj["_"]) {
    wildcards = letterRackObj["_"];
  }

  for (const [key, value] of Object.entries(wordObj)) {
    if (!letterRackObj[key] || value > letterRackObj[key]) {
      if (wildcards["_"] < 1) {
        return false;
      }
      wildcards["_"]--;
    }
  }
  return true;
}
// const letterRackObj = getLetterCount("ASDFGTRESIOOOVSEST");
// const wordObj = getLetterCount("GROOFUS");
// console.log(isValidWord(letterRackObj, wordObj));

/*
PART 1
Fn: Output Valid Words With Respective Scores
- input a string of scrabble/random letters
- creates letter to letter frequency object for letters available 
- for loop to access each word of array
- creates letter to letter frequency object for each word in data source array
- call isValidWord to check if word(s) can be created from letters available

PART 2
- tallies score per valid word
- assigns score to words made
- return array containing word with its score 
  */
const words = ["OH", "HAPPY", "CODE", "FILLED", "DAYS"];
function getValidWords(availableLetters) {
  const validWords = [];
  const availableLettersObj = getLetterCount(availableLetters);

  for (const word of words) {
    const wordObj = getLetterCount(word);

    if (isValidWord(availableLettersObj, wordObj)) {
      validWords.push(word);
    }
  }

  const scoredWords = [];
  for (const word of validWords) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter];
    }
    scoredWords.push({ word: word, score: score });
  }
  return scoredWords;
}
console.log(getValidWords("CHO_APDEPY")); // w/o blank tiles only returns "oh"

/*
INCORPORATE BLANK TILES
  
  Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.
  
  Wildcards do not count towards a word's score.
  
  - in appropriate existing fns/code, refactor code to handle blank tiles aka wild cards
  - implement underscore symbol to help create words
  --- meaning any letter can be used in that place
  - assign variable to numeric value of blank tiles aka wild cards
  - implement blank tiles aka wild cards to be available as chars/letters for as many times as the user uses a tile in a word they are trying to create
  */
