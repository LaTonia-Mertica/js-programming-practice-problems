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
const sampleWords = ["APPLES", "XAYBZC"];

for (let i = 0; i < sampleWords.length; i++) {
  const word = sampleWords[i];
  let isValid = true;
  for (let j = 0; j < specifiedElements.length; j++) {
    const searchLetter = specifiedElements[j];
    const wordLetter = word[specifiedIndices[j]];
    if (searchLetter !== wordLetter) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    specifiedWordsArray.push(word);
  }

  // if (
  //   word[specifiedIndices[0]] === specifiedElements[0] &&
  //   word[specifiedIndices[1]] === specifiedElements[1] &&
  //   word[specifiedIndices[2]] === specifiedElements[2]
  // ) {
  // specifiedWordsArray.push(word);
  //}
}

console.log({ specifiedWordsArray });

/*
TRACING
word = apples
left side = index 1 letter P
right side = letter A
false

left side = index 3 letter L
right side = letter B

left side = index 5 letter S
right side = letter C

word = XAYBZC
left side = index 1 letter A
right side = letter A
true

left side = index 3 letter B
right side = letter B
true

left side = index 5 letter C
right side = letter C
true
output = XAYBZC
*/
