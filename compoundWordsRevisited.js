/*
QUESTION
What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.
*/
// storage for words that meet criteria
const compoundWordArray = [];
// data
const words = [
  "AIR",
  "AIRPORT",
  "AIRPLANE",
  "BOOK",
  "CODE",
  "CODEBOOK",
  "HALL",
  "PORT",
  "ZAG",
  "ZIG",
  "ZIGZAG",
];
// outer for loop to access each word in array
for (const word of words) {
  // inner for loop using index to access each letter of each word
  for (let i = 0; i < word.length; i++) {
    // variable to assign how to determine first word in compound word
    const wordOne = word.slice(0, i + 1);
    // variable to assign how to determine second/last word in compound word
    const wordTwo = word.slice(i + 1);
    // check that both words in compound word are in word array
    if (words.includes(wordOne) && words.includes(wordTwo)) {
      // store words that meet criteria
      compoundWordArray.push(word);
    }
  }
}
// console log with timer on the program
const go = performance.now();
console.log("\n", { compoundWordArray });
const nogo = performance.now();
console.log(nogo - go + " MS COMPOUND WORD ARRAY RUN TIME");
