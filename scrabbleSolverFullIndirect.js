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
function countLetters(word) {
  const countLettersObj = {};
  for (const letter of word) {
    if (!countLettersObj[letter]) {
      countLettersObj[letter] = 1;
    } else {
      countLettersObj[letter]++;
    }
  }
  return countLettersObj;
}
// console.log(countLetters("LA'TONIA MERTICA"));

/*
Fn: Determine If Word Passed as Param/Arg Can Be Made
- input/params two objects
--- lettersObj: aka scrabbleObj is an object that contains available letters in scrabble rack
--- inputObj: aka wordObj is an object that contains the word you want to check against the rack
- checks if input can be created per available chars/letters in letters object
- return bool re: whether can make the word
  */
function isValidWord(scrabbleObj, wordObj) {
  let blankTilesNum = 0;
  if (scrabbleObj["_"]) {
    blankTilesNum = scrabbleObj["_"];
  }

  for (const [key, value] of Object.entries(wordObj)) {
    if (!scrabbleObj[key] || value > scrabbleObj[key]) {
      if (blankTilesNum < 1) {
        return false;
      }
      blankTilesNum--;
    }
  }
  return true;
}
// const scrabbleObj = countLetters("GLAMOROUSLIES");
// const wordObj = countLetters("BROKEN");
// console.log(isValidWord(scrabbleObj, wordObj));

/*
Fn: Output Valid Words With Respective Scores

- input a string
- creates letter to letter frequency object for letters available 
- creates letter to letter frequency object for each word in data source array
- checks if word(s) can be created from letters available
- tallies score per valid word
- assigns score to words made
- return array containing word with its score 
  */
const words = ["APPLES", "BANANAS", "PINEAPPLES"];

function getValidWords(input) {
  const validWords = [];

  const inputObj = countLetters(input);
  for (const word of words) {
    const wordObj = countLetters(word);

    if (isValidWord(inputObj, wordObj)) {
      validWords.push(word);
    }
  }

  const wordWithScore = [];
  for (const word of validWords) {
    let wordScore = 0;

    for (const letter of word) {
      wordScore = wordScore + scores[letter];
    }
    wordWithScore.push({ word: word, score: wordScore });
  }
  return wordWithScore;
}
// console.log(getValidWords("JANASNSEPLLESTOKENSIJUGYERBPPA"));
console.log(getValidWords("B__A_SA_INESS"));

/*
INCORPORATE BLANK TILES
  
  Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.
  
  Wildcards do not count towards a word's score.
  
  - in appropriate existing fns/code, refactor code to handle blank tiles aka wild cards ... this is only in isValidWord fn
  - implement underscore symbol to help create words
  --- meaning any letter can be used in that place
  - assign variable to numeric value of blank tiles aka wild cards
  - implement blank tiles aka wild cards to be available as chars/letters for as many times as the user uses a tile in a word they are trying to create
  */
