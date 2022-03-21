// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const printWordsWithAllVowels = () => {
  // use empty array to track output
  let vowelsInAnyOrderWords = [];

  for (const words of wordsByLine) {
    // check whether all vowels present
    if (
      words.includes("A") &&
      words.includes("E") &&
      words.includes("I") &&
      words.includes("O") &&
      words.includes("U")
    ) {
      // and add word to array when all vowels present
      // vowels can be in any order in this scenario
      vowelsInAnyOrderWords.push(words);
    }
  }
  console.log("Words containing vowels in any order:", vowelsInAnyOrderWords);
};

printWordsWithAllVowels();
