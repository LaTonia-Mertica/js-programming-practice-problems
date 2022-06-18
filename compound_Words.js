const fs = require("fs");
const wordArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

/*
QUESTION
What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.

- storage for words that meet criteria
- for loop to access each word
- variable to store each word
- inner for loop to access each letter of each word and no need for variable to store letter
- variable for first word assigned to value of slice applied to word variable with 2 params of start index and letter index variable incrementing by 1 (use + 1)
- variable for second word assigned to value of slice applied to word variable with 1 param of letter index variable plus number 1 
- check if array of words includes the first word variable AND includes the second word variable
- push words that meet criteria
- OPTIONAL to add a break after each push to try to optimize the code
- console log
- OPTIONAL to add timer to console log
*/
const compoundWordArr = [];
for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  for (let j = 0; j < word.length; j++) {
    const word1 = word.slice(0, j + 1);
    const word2 = word.slice(j + 1);

    if (wordArray.includes(word1) && wordArray.includes(word2)) {
      compoundWordArr.push(word);
      break;
    }
  }
}
const timerGo = performance.now();
console.log("\n", { compoundWordArr });
const timerEnd = performance.now();
console.log(timerEnd - timerGo + " MS COMPOUND WORD ARR RUN TIME\n");
