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
console.log(getPrefixAndSuffix("PRE", "ATE"));
console.log(getPrefixAndSuffix("ANTI", "TION"));
