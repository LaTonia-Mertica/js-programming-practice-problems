const fs = require("fs");
const strings = fs.readFileSync("sowpods.txt").toString("utf-8");
const array = strings.split("\n");

const lettersEachWordMayOnyContain = ["R", "S", "T", "L", "N", "E"];
const indicesNeeded = [0, 3, 1];

const resultArray = [];

for (let i = 0; i < array.length; i++) {
  const word = array[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (!lettersEachWordMayOnyContain.includes(letter)) {
      break;
    } else {
      if (
        word[indicesNeeded[0]] === lettersEachWordMayOnyContain[0] &&
        j === word.length - 1
      ) {
        //   if (word.charAt(0) === "R" && j === word.length - 1) {
        resultArray.push(word);
      }
    }
  }
}
console.log({ resultArray });
