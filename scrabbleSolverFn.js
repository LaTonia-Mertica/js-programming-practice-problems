/*
Part 1
Write code that:
- Accepts a string (either as a command-line argument or as an argument to a function)
- Prints out the words that can be made from those characters, along with their Scrabble scores, one word per line, in descending score order

Example input and output:

`$ python scrabble_cheater.py SPCQEIU  # Use any language you like.`
`17 piques`
`17 equips`
`16 quips`
`16 pique`
`16 equip`
`15 quip`
`…`

Part 2
Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.

Wildcards do not count towards a word's score.
*/
const fs = require("fs");
const scrabbleWords = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toLowerCase()
  .trim()
  .split("\n");

const scores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
  _: 0,
};

// convert strings to object of key-value pair for letter to letter frequency
function getLetterFrequency(word) {
  const letterFrequency = {};

  for (const letter of word) {
    if (!letterFrequency[letter]) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter]++;
    }
  }
  return letterFrequency;
}

// create two objects of sets of available letters
// compare letter frequency in two objects to determine if can create a word from random letters provided
function canCreateWord(rackObj, wordObj) {
  let wildcards = 0;
  if (rackObj["_"]) {
    wildcards = rackObj["_"];
  }

  for (const [key, value] of Object.entries(wordObj)) {
    if (!rackObj[key] || value > rackObj[key]) {
      if (wildcards < value) {
        return false;
      }
      wildcards--;
    }
  }
  return true;
}

// main fn to compare available letters to words in array to get words that can be created
function getWordsCanCreate(availableLetters) {
  const availableLettersObj = getLetterFrequency(availableLetters);
  const createdWords = [];

  for (const word of scrabbleWords) {
    const wordObj = getLetterFrequency(word);

    if (canCreateWord(availableLettersObj, wordObj)) {
      createdWords.push(word);
    }
  }

  const wordScores = [];
  for (const word of createdWords) {
    let score = 0;

    for (const letter of word) {
      score += scores[letter];
    }
    wordScores.push({ word, score });
  }

  let scoreSort = [];
  for (const obj of wordScores) {
    scoreSort.push([obj.score, obj.word]);
  }
  scoreSort = scoreSort.sort(function (a, b) {
    return b[0] - a[0];
  });

  return scoreSort;
}
console.log(getWordsCanCreate("x_z"));
