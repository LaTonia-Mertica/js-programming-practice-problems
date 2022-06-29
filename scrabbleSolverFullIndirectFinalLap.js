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
// console.log(getLetterCount("GOODJOB"));

/*
Fn: Determine If Word Passed as Param/Arg Can Be Made
- input/params two objects
--- lettersObj: an object that contains available letters in scrabble rack
--- inputObj: an object that contains the word you want to check against the rack
- checks if input can be created per available chars/letters in letters object
- return bool re: whether can make the word
  */
function canMakeWord(scrabbleRackObj, wordInputObj) {
  let wildcard = 0;
  if (scores["_"]) {
    wildcard = scores["_"];
  }

  for (const [key, value] of Object.entries(wordInputObj)) {
    if (!scrabbleRackObj[key] || value > scrabbleRackObj[key]) {
      if (wildcard < 1) {
        return false;
      }
      wildcard--;
    }
  }
  return true;
}
// const scrabbleRackObj = getLetterCount("JKAOLSHYGUERS");
// const wordInputObj = getLetterCount("SODA");
// console.log(canMakeWord(scrabbleRackObj, wordInputObj));

/*
PART 1
Fn: Output Valid Words 
- input a string
- creates letter to letter frequency object for letters available 
- iterate word array
- iterate letter of each word
- creates letter to letter frequency object for each word in data source array
- checks if word(s) can be created from letters available

PART 2 Output Valid Words With Respective Scores
- tallies score per valid word
- assigns score to words made
- return array containing word with its score 
  */
const words = ["TesT", "Excited", "abSOlutely", "enthusiastic", "Array"];

function getValidWords(availableLetters) {
  const validWords = [];
  const availableLettersObj = getLetterCount(availableLetters);

  for (const word of words) {
    const wordObj = getLetterCount(word.toUpperCase());

    if (canMakeWord(availableLettersObj, wordObj)) {
      validWords.push(word);
    }
  }

  const wordScores = [];
  let score = 0;
  for (const word of validWords) {
    for (const letter of word) {
      score = score + scores[letter.toUpperCase()];
    }
    wordScores.push({ word: word, score: score });
  }
  return wordScores;
}
console.log(getValidWords("ABSOLUTELY"));
