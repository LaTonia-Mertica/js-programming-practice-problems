/* 
Find letters never seen together with themselves in English Words
*/

const fs = require("fs");
const sowpodsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
// const arrayOfSowpodsWords = sowpodsAsStrings("\n");

const allSowpodsWords = [];
allSowpodsWords.push(sowpodsAsStrings);

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

let letterNeverSeenTogetherWithItselfArr = [];

for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  for (let j = 0; j < allSowpodsWords.length; j++) {
    const word = allSowpodsWords[j];

    if (word.includes(letter + letter)) {
      break;
    } else {
      letterNeverSeenTogetherWithItselfArr.push(letter);
    }
  }
}
console.log({ letterNeverSeenTogetherWithItselfArr });
