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
function letterCount(word) {
  const wordLetterObj = {};

  for (const letter of word) {
    if (!wordLetterObj[letter]) {
      wordLetterObj[letter] = 1;
    } else {
      wordLetterObj[letter]++;
    }
  }
  return wordLetterObj;
}
// console.log(letterCount("SHEPPARD WALKER"));

/*
Fn: Determine If Word Passed as Param/Arg Can Be Made
- input/params two objects
--- lettersObj: an object that contains available letters in scrabble rack
--- inputObj: an object that contains the word you want to check against the rack
- checks if input can be created per available chars/letters in letters object
- return bool re: whether can make the word
  */
function doesCreateWord(scrabbleRackObj, wordObj) {
  let numOfBlankTiles = 0;
  if (scrabbleRackObj["_"]) {
    numOfBlankTiles = scrabbleRackObj["_"];
  }

  for (const [key, value] of Object.entries(wordObj)) {
    if (!scrabbleRackObj[key] || value > scrabbleRackObj[key]) {
      if (numOfBlankTiles < 1) {
        return false;
      }
      numOfBlankTiles--;
    }
  }
  return true;
}
// const scrabbleRackObj = letterCount("AKISNDFGSERSFEESLWOPS");
// const wordObj = letterCount("POOHEAD");
// console.log(doesCreateWord(scrabbleRackObj, wordObj));

/*
FN 3 PART 1
Fn: Output Valid Words With Respective Scores
- input a string (of random letters)
- storage for output
- creates letter to letter frequency object for letters available 
- creates letter to letter frequency object for each word in data source array
- checks if word(s) can be created from letters available

FN 3 PART 2
- tallies score per valid word
- assigns score to words made
- return array containing word with its score 
  */
const words = [
  "ANTIFUNGAL",
  "BIFUNCTIONAL",
  "COFUNCTIONS",
  "PROFOUNDATIONAL",
  "REGROWTHAL",
];

function outputValidWords(availableLetters) {
  const validWords = [];

  const availableLettersObj = letterCount(availableLetters);
  for (const word of words) {
    const wordObj = letterCount(word);

    if (doesCreateWord(availableLettersObj, wordObj)) {
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
console.log(outputValidWords("BAIFFUNGEALCTIOASNN"));

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
