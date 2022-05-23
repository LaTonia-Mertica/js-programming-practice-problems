/*
- write a function that encapsulates some logic ... done
- call that function in some additional code to solve the problem ... done

these functions often take some argument as input and then return a boolean, so you can call the function as part of an if condition ... done

THE QUESTION
What is the shortest word that has all of the vowels? ... done

- handle ties ... done
- implement consistency of letter case ... simply use all uppercase/done

write a function that checks if a string has all of the vowels: take a string as an argument and return a boolean)

note: I was taught parameters go into the function and arguments are passed to get output from function .... basically same difference
*/

// file system to use data provided in sowpods file
const fs = require("fs");
const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");

function wordHasAllVowels(str) {
  if (
    str.includes("A") &&
    str.includes("E") &&
    str.includes("I") &&
    str.includes("O") &&
    str.includes("U")
  ) {
    return true;
  } else {
    return false;
  }
}
//console.log(wordHasAllVowels("SUANI TOULLES"));

let shortestWordAllVowels;
let shortestWordsAllVowelsCollectionInArray = [];

for (const word of wordArr) {
  if (wordHasAllVowels(word) === true) {
    if (!shortestWordAllVowels || word.length < shortestWordAllVowels.length) {
      shortestWordAllVowels = word;
      shortestWordsAllVowelsCollectionInArray = [word];
    } else if (word.length === shortestWordAllVowels.length) {
      shortestWordsAllVowelsCollectionInArray.push(word);
    }
  }
}
console.log({ shortestWordAllVowels });
console.log({ shortestWordsAllVowelsCollectionInArray });

// very VERY well done ... keep striving for improvement!
