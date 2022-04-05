const fs = require("fs");
const sowpodsStr = fs.readFileSync("sowpods.txt").toString("utf-8");

const allSowpodsWords = [];
allSowpodsWords.push(sowpodsStr);

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
const nonRepeaterLetters = [];

for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  for (let j = 0; j < allSowpodsWords.length; j++) {
    const word = allSowpodsWords[j];
    if (word.includes(letter + letter)) {
      break;
    } else {
      nonRepeaterLetters.push(letter);
    }
  }
}
console.log({ nonRepeaterLetters });
