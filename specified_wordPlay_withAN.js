/*
- What are all of the words that are 5 letters long and have a “S” in the first place?

- Any words that have letters in specified elements in the specified indices

TRY TO ADD B AND C INTO CODE FLOW ... done🤓

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
*/

const fs = require("fs");
const strings = fs.readFileSync("sowpods.txt").toString("utf-8");
const array = strings.split("\n");

const specifiedWordsArray = [];
const specifiedElements = ["A", "B", "C"];
const specifiedIndices = [1, 3, 5];

for (let i = 0; i < array.length; i++) {
  const word = array[i];
  if (
    word[specifiedIndices[0]] === specifiedElements[0] &&
    word[specifiedIndices[1]] === specifiedElements[1] &&
    word[specifiedIndices[2]] === specifiedElements[2]
  ) {
    specifiedWordsArray.push(word);
  }
}

console.log({ specifiedWordsArray });
