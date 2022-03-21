// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("UTF-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  //   let allWords = [];
  //   allWords.push(words);
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

  // to store words
  let repeat_letter_words = [];

  // nested for loops to iterate characters/letters and words
  for (const words of wordsByLine) {
    let number_double_letters = 0;
    for (const letter of alphabet) {
      if (words.includes(`${letter}${letter}`)) {
        number_double_letters++;
      }
    }
    if (number_double_letters >= 3) {
      repeat_letter_words.push(words);
    }
  }

  console.log(
    "Words with letters that appear at least twice:",
    repeat_letter_words
  );
};

readlines();
