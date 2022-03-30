/* 
QUESTION
[ ] Which of the letters Q, X, and Z is the least common? 
*/

/*
[x] arrange file system to access/read data provided in text edit file
[x] declare counter variable for each letter
[x] for loop through words created by file system
[x] declare word variable
[x] inner for loop through letters of each word
[x] declare letter variable
[x] if/else statements to compare each letter in word to sought letters
[x] increment count for each letter as another of that letter is found
[x] console log
*/

const fs = require("fs");
const strings = fs.readFileSync("sowpods.txt").toString("utf-8");
const array = strings.split("\n");

let qCount = 0;
let xCount = 0;
let zCount = 0;

for (let i = 0; i < array.length; i++) {
  const word = array[i];
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
console.log("Q COUNT: ", qCount);
console.log("X COUNT: ", xCount);
console.log("Z COUNT: ", zCount);
