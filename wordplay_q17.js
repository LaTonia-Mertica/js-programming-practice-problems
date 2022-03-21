// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("UTF-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let allWords = [];
  allWords.push(words);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let lettersThatDontHaveWordsThatDoubleThem = [];

  // nested for loops to iterate words and characters/letters
  // seeking words with double letter next to each other
  // to then exclude those letters
  for (const letter of alphabet) {
    let doubleLetterWordExists = false;
    for (const words of allWords) {
      if (words.includes(`${letter}${letter}`)) {
        doubleLetterWordExists = true;
        break;
      }
    }
    if (!doubleLetterWordExists) {
      lettersThatDontHaveWordsThatDoubleThem.push(letter);
    }
  }

  console.log(
    "Letters that don't have words in the English language that contain the letters in repetition:",
    lettersThatDontHaveWordsThatDoubleThem
  );
};

readlines();
