/* 
QUESTION
[ ] Which of the letters Q, X, and Z is the least common? 
*/

/*
[x] arrange file system to access data in provided text edit file
[x] declare counter for each letter and assign to 0
[x] for loop through words in array created by file system
[x] declare variable for word(s)
[x] inner for loop through letters of each word
[x] declare variable for letter(s)
[x] set count criteria with if/else statements to increment for pertinent letters
[x] console log all letters with respective count for comparison
*/

const fs = require("fs");
const wordStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordArray = wordStrings.split("\n");

let qCount = 0;
let xCount = 0;
let zCount = 0;

for (let i = 0; i < wordArray.length; i++) {
  const word = wordArray[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (letter === "Q") {
      qCount++;
    } else if (letter === "X") {
      xCount++;
    } else if (letter === "Z") {
      zCount++;
    }
  }
}
console.log("Q COUNT: ", { qCount });
console.log("X COUNT: ", { xCount });
console.log("Z COUNT: ", { zCount });
