/*
- write a function that encapsulates some logic/done
- call that function in some additional code to solve the problem/done

these functions often take some argument as input (parameter; argument) and then return a boolean (name fn as true or false), so you can call the function as part of an if condition

THE CHALLENGE
What is the longest word that has no vowels (no A, E, I, O, or U)? 

- handle ties/done
- implement consistency of letter case/done

write a function that checks if a string has no vowels: take a string as an argument and return a boolean
*/

const fs = require("fs");
const wordStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArray = wordStrings.split("\n");

function wordHasNoVowels(str) {
  if (
    !str.includes("A") &&
    !str.includes("E") &&
    !str.includes("I") &&
    !str.includes("O") &&
    !str.includes("U")
  ) {
    return true;
  } else {
    return false;
  }
}
//console.log(wordHasNoVowels());

let longestWordWithNoVowels;
let longestWordsWithNoVowelsAsAnArray = [];

for (const word of wordArray) {
  if (wordHasNoVowels(word) === true) {
    if (
      !longestWordWithNoVowels ||
      word.length > longestWordWithNoVowels.length
    ) {
      longestWordWithNoVowels = word;
      longestWordsWithNoVowelsAsAnArray = [word];
    } else if (word.length === longestWordWithNoVowels.length) {
      longestWordsWithNoVowelsAsAnArray.push(word);
    }
  }
}
// if done correctly, first console log returns word first found that meets criteria
console.log({ longestWordWithNoVowels });
// if done correctly, array returns first word found at index 0 with subsequent words found after it
console.log({ longestWordsWithNoVowelsAsAnArray });
