/*
Write a function that takes a word, and returns a dictionary where the keys are the letters and the values are the count of the letter in the word.

Ex: getLetterCounts("aardvark") --> { "a": 3, "d": 1, "r": 2, "k": 1, "v":1 }
*/

// const fs = require("fs");
// const sowpodsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
// const arraySowpodsWords = sowpodsStrings.split("\n");

function getLetterCounts(str) {
  const letterCountsDict = {};
  for (let i = 0; i < str.length; i++) {
    console.log({ i });
    let key = str[i];
    console.log({ key });

    if (letterCountsDict[key] === undefined) {
      letterCountsDict[key] = 1;
      console.log({ letterCountsDict });
    } else {
      letterCountsDict[key] += 1;
      console.log({ letterCountsDict });
    }
  }
  return letterCountsDict;
}
console.log(getLetterCounts("LATONIAMERTICA"));

/*
TRACING
str = aardvark
i = 0
key = a
letterCountsDict = {}
letterCountsDict = {a: 1}

str = aardvark
i = 1
key = a
letterCountsDict = {a: 2}
*/

/*
Find all the words in sowpods.txt that contains the prefix "PRE" and the suffix "ATE"

Now, take the code we're written and turn it into a function that takes two parameters called prefix and suffix, and returns an array of words that contain the prefix and suffix.

Every time I run my function, I want it to start with an empty array, and then do a for loop, etc etc

Now change && to get words with either prefix or suffix

Now, change your function to return two arrays:one array of all the words with the prefix and one array with all the words that contain the suffix

Change your function to return an object/dictionary/mapping that has two keys called "prefix" and "suffix" with values that are the arrays that you populated.

EXPECTED OUTPUT:
{ "prefix": ["PREAMBLE", "PREDATE", ....], "suffix": ["ANIMATE", "ALATE", ...] }
*/

const fs = require("fs");
const sowpodsWordsInStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const arrayOfSowpodsWords = sowpodsWordsInStrings.split("\n");

// const getWordsStartPREAndEndATE = [];

// for (const word of arrayOfSowpodsWords) {
//   if (word.startsWith("PRE") && word.endsWith("ATE")) {
//     getWordsStartPREAndEndATE.push(word);
//   }
// }
// console.log({ getWordsStartPREAndEndATE });

function getPrefixAndSuffix(prefix, suffix) {
  const getWordsPrefixAndSuffixObj = {};
  const getPrefixArr = [];
  const getSuffixArr = [];
  for (const word of arrayOfSowpodsWords) {
    if (word.startsWith(prefix)) {
      getPrefixArr.push(word);
    }
    if (word.endsWith(suffix)) {
      getSuffixArr.push(word);
    }
  }
  getWordsPrefixAndSuffixObj["prefix"] = getPrefixArr;
  getWordsPrefixAndSuffixObj["suffix"] = getSuffixArr;

  return getWordsPrefixAndSuffixObj;
}
// console.log(getPrefixAndSuffix("PRE", "ATE"));
// console.log(getPrefixAndSuffix("ANTI", "TION"));
