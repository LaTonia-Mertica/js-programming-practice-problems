/* 
QUESTION
[ ] Which of the letters Z, X, and Q is the least common? 
Output the count for each AND the least! Meaning compare them and only output least letter!!
*/

/*
[x] arrange file system to access and read data provided in text edit file
[x] declare counter variable for each letter initialized at number 0
[x] for loop through words created by file system
[x] declare word variable
[x] inner for loop through letters of each word
[x] declare letter variable
[x] if/else to compare letter to sought letter(s)
[x] increment count for each sought letter as new one found through iteration
[x] compare count/number of all sought letters
[x] console log count for all sought letters
[x] console log only the least found letter
*/

const fs = require("fs");
const stringsOfWords = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrayOfWords = stringsOfWords.split("\n");

let zCount = 0;
let xCount = 0;
let qCount = 0;

for (let i = 0; i < arrayOfWords.length; i++) {
  const word = arrayOfWords[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (letter === "Z") {
      zCount++;
    } else if (letter === "X") {
      xCount++;
    } else if (letter === "Q") {
      qCount++;
    }
  }
}
console.log("Z COUNT: ", { zCount });
console.log("X COUNT: ", { xCount });
console.log("Q COUNT: ", { qCount });
console.log("\n");
if (zCount < (xCount && qCount)) {
  console.log("Z IS THE LETTER FOUND THE LEAST OF THE THREE");
} else if (xCount < (zCount && qCount)) {
  console.log("X IS THE LETTER FOUND THE LEAST OF THE THREE");
} else {
  console.log("Q IS THE LETTER FOUND THE LEAST OF THE THREE");
}
console.log("\n");
