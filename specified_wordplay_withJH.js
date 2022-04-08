/*
What are all of the letters that never appear consecutively in an English word? 

For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?
*/

/*
[] arrange file system to access/read data from provided text edit file
[] create variable assigned to emtpty array for all words 
[] re-assign that same variable to the strings created by the file system
[] create variable assigned letters of alphabet
[] create variable to store letters that meet criteria

... focus on code needed to fulfill below first
[] loop through letters 
[] loop through words
[] check if a letter is there back to back 
[] if it is skip that letter but if not store that letter
*/

const fs = require("fs");
const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");

// const alphabet = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
const alphabet = ["U", "E"];
const sampleWords = ["AARDVARK", "VACUUM", "EEL", "EERIE"];

let nonDoubleLetters = [];

for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];

  for (let j = 0; j < sampleWords.length; j++) {
    const word = sampleWords[j];
    // console.log(
    //   "🚀 ~ file: specified_wordplay_withJH.js ~ line 61 ~ letter",
    //   letter
    // );

    // console.log(
    //   "🚀 ~ file: specified_wordplay_withJH.js ~ line 65 ~ word",
    //   word
    // );
    if (word.includes(letter + letter)) {
      // console.log({ nonDoubleLetters });
      break;
    } else {
      nonDoubleLetters.push(letter);
      // console.log({ nonDoubleLetters });
    }
  }
}
console.log({ nonDoubleLetters });

/*
TRACING

letter = U
word = undefined
word = aardvark
nonDoubleLetters = ["U"]

letter = U
word = vacuum
nonDoubleLetters = ["U"]
break
line 56

letter = E
word = undefined
word = aardvark
nonDoubleLetters = ["U", "E"]

letter = E
word = vacuum
nonDoubleLetters = ["U", "E", "E"]

letter = E
word = eel
break
line 56
*/
