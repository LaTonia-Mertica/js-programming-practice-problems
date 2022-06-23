// global
const fs = require("fs");
const { start } = require("repl");

/*
[x] What are all of the words containing UU?
[x] What are all of the words containing an X and a Y and a Z?
[x] What are all of the words containing a Q but not a U?
[x] What are all of the words that contain the word CAT and are exactly 5 letters long?
[x] What are all of the words that have no E or A and are at least 15 letters long?
[x] What are all of the words that have a B and an X and are less than 5 letters long?
[x] What are all of the words that start and end with a Y?
[x] What are all of the words with no vowel and not even a Y?
[x] What are all of the words that have all 5 vowels, in any order?
[x] What are all of the words that have all 5 vowels, in alphabetical order? */
const sowpodsArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");
// console.log({ sowpodsArray });

const wordsUU = [];
for (const word of sowpodsArray) {
  if (word.indexOf("UU") !== -1) {
    wordsUU.push(word);
  }
}
console.log({ wordsUU });

const wordsXYZ = [];
sowpodsArray.forEach((word) => {
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    wordsXYZ.push(word);
  }
});
console.log({ wordsXYZ });

const wordsQNotU = [];
sowpodsArray.forEach((word) => {
  if (word.indexOf("Q") !== -1 && !word.includes("U")) {
    wordsQNotU.push(word);
  }
});
console.log({ wordsQNotU });

const wordsCat5Letters = [];
sowpodsArray.forEach((word) => {
  if (word.length === 5 && word.match("CAT")) {
    wordsCat5Letters.push(word);
  }
});
console.log({ wordsCat5Letters });

const wordsNoEOrAAtLeast15Letters = [];
sowpodsArray.forEach((word) => {
  if (
    word.length >= 15 &&
    word.indexOf("A") === -1 &&
    word.indexOf("E") === -1
  ) {
    wordsNoEOrAAtLeast15Letters.push(word);
  }
});
console.log({ wordsNoEOrAAtLeast15Letters });

const wordsBAndXUnder5Letters = [];
sowpodsArray.forEach((word) => {
  if (word.length < 5 && word.includes("B") && word.includes("X")) {
    wordsBAndXUnder5Letters.push(word);
  }
});
console.log({ wordsBAndXUnder5Letters });

const wordsYStartAndEnd = [];
sowpodsArray.forEach((word) => {
  const startLetter = word.charAt(0);
  const endLetter = word[word.length - 1];
  if (startLetter === "Y" && endLetter === "Y") {
    wordsYStartAndEnd.push(word);
  }
});
console.log({ wordsYStartAndEnd });

const wordsNoVowelsNotEvenY = [];
for (const word of sowpodsArray) {
  if (
    word.includes("A") ||
    word.includes("E") ||
    word.includes("I") ||
    word.includes("O") ||
    word.includes("U") ||
    word.includes("Y")
  ) {
    continue;
  } else {
    wordsNoVowelsNotEvenY.push(word);
  }
}
console.log({ wordsNoVowelsNotEvenY });

const words5VowelsAnyOrder = [];
sowpodsArray.forEach((word) => {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    words5VowelsAnyOrder.push(word);
  }
});
console.log({ words5VowelsAnyOrder });

const words5VowelsAlphaOrder = [];
sowpodsArray.forEach((word) => {
  const aPos = word.indexOf("A");
  const ePos = word.indexOf("E");
  const iPos = word.indexOf("I");
  const oPos = word.indexOf("O");
  const uPos = word.indexOf("U");

  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (aPos < ePos && ePos < iPos && iPos < oPos && oPos < uPos) {
      words5VowelsAlphaOrder.push(word);
    }
  }
});
console.log({ words5VowelsAlphaOrder });
// 3-MINUTE WRIST BREAK

/*
[x] How many words contain the substring "TYPE”?
[x] Create and print an array containing all of the words that end in "GHTLY"
[x] What is the shortest word that contains all 5 vowels?
[x] What is the longest word that contains no vowels?
[x] Which of the letters Q, X, and Z is the least common?
[x] What is the longest palindrome?
[x] What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively? */
const scrabbleWordsArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");
// console.log({ scrabbleWordsArray });

let wordsTypeCount = 0;
const wordsType = [];

scrabbleWordsArray.forEach((word) => {
  if (word.match("TYPE")) {
    wordsTypeCount++;
    wordsType.push(word);
  }
});
console.log({ wordsTypeCount }, { wordsType });

const wordsGhtlyEnd = [];
scrabbleWordsArray.forEach((word) => {
  if (word.endsWith("GHTLY")) {
    wordsGhtlyEnd.push(word);
  }
});
console.log({ wordsGhtlyEnd });

let shortestWordAll5Vowels;
scrabbleWordsArray.forEach((word) => {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !shortestWordAll5Vowels ||
      word.length < shortestWordAll5Vowels.length
    ) {
      shortestWordAll5Vowels = word;
    }
  }
});
console.log({ shortestWordAll5Vowels });

let longestWordNoVowels;
scrabbleWordsArray.forEach((word) => {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!longestWordNoVowels || word.length > longestWordNoVowels.length) {
      longestWordNoVowels = word;
    }
  }
});
console.log({ longestWordNoVowels });

let longestWordNoVowelsNotEvenY;
scrabbleWordsArray.forEach((word) => {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    if (
      !longestWordNoVowelsNotEvenY ||
      word.length > longestWordNoVowelsNotEvenY.length
    ) {
      longestWordNoVowelsNotEvenY = word;
    }
  }
});
console.log({ longestWordNoVowelsNotEvenY });

let qCount = 0;
let xCount = 0;
let zCount = 0;

for (const word of scrabbleWordsArray) {
  for (const letter of word) {
    if (letter === "Q") {
      qCount++;
    } else if (letter === "X") {
      xCount++;
    } else if (letter === "Z") {
      zCount++;
    }
  }
}

if (qCount < xCount && qCount < zCount) {
  console.log("LETTER Q IS LEAST COMMON");
} else if (xCount < qCount && xCount < zCount) {
  console.log("LETTER X IS LEAST COMMON");
} else {
  console.log("LETTER Z IS LEAST COMMON");
}
console.log({ qCount }, { xCount }, { zCount });

let palindromeLongest;
scrabbleWordsArray.forEach((word) => {
  const wordReverse = word.split("").reverse().join("");

  if (word === wordReverse) {
    if (!palindromeLongest || wordReverse.length > palindromeLongest.length) {
      palindromeLongest = wordReverse;
    }
  }
});
console.log({ palindromeLongest });

const scrabbleWordStrs = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
// console.log({ scrabbleWordStrs });

const lettersNonConsecutive = [];
const allWords = [];
allWords.push(scrabbleWordStrs);

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

alphabet.forEach((letter) => {
  allWords.forEach((word) => {
    if (!word.includes(letter + letter)) {
      lettersNonConsecutive.push(letter);
    }
  });
});
console.log({ lettersNonConsecutive });
// 3-MINUTE WRIST BREAK

/* 
[x] What are all of the words that have a U and a Z and are less than 5 letters long?
[x] What are all of the words that both start with a “TH” and end with a “TH”?
[x] What are all of the words that have a “U” but no other vowel?
[x] What are all of the words that can be made from only the letters “R”, “S”, “T”, “L”, “N”, and “E”? (Not all of those letters need to be used, and letters can be repeated)
[x] What are all of the words that are 5 letters long and have a “S” in the first place?
    [x] Can you change the code to make it easier to change out the letter from S to another letter?
    [x] What are all of the words that are 5 letters long and have a “T” in the last place?
    [x] What are all of the words that are 5 letters long and have an “L” in the third place and a “T” in the last place?
    [] What are all of the words that are 5 letters long and have a “B” in the first place, an “L” in the third place, and a “T” in the last place?
    [] Imagine the previous question, but for even more rules, like ten different letters are required. How could you make it easier to use?
        - “I’m looking for all words that have O in the second place and Y in the last place”
        - “L in third place, T in fourth place, S in fifth place, …” */
const wordsArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");
// console.log({ wordsArray });

const wordsUAndZ5Letters = [];
wordsArray.forEach((word) => {
  if (word.length < 5 && word.match("U") && word.match("Z")) {
    wordsUAndZ5Letters.push(word);
  }
});
console.log({ wordsUAndZ5Letters });

const wordsThStartAndEnd = [];
wordsArray.forEach((word) => {
  const startWord = word.startsWith("TH");
  const endWord = word.endsWith("TH");

  if (startWord && endWord) {
    wordsThStartAndEnd.push(word);
  }
});
console.log({ wordsThStartAndEnd });

const wordsUVowelOnly = [];
wordsArray.forEach((word) => {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O")
  ) {
    wordsUVowelOnly.push(word);
  }
});
console.log({ wordsUVowelOnly });

const wordsUVowelOnlyEvenExcludingY = [];
wordsArray.forEach((word) => {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("Y")
  ) {
    wordsUVowelOnlyEvenExcludingY.push(word);
  }
});
console.log({ wordsUVowelOnlyEvenExcludingY });

const wordsPerSpecifiedLetterPool = [];
const specifiedLetterPool = ["R", "S", "T", "L", "N", "E"];

for (const word of wordsArray) {
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!specifiedLetterPool.includes(letter)) {
      break;
    } else if (j === word.length - 1) {
      wordsPerSpecifiedLetterPool.push(word);
    }
  }
}
console.log({ wordsPerSpecifiedLetterPool });

const words5LettersWithSFirstPlace = [];
wordsArray.forEach((word) => {
  const firstPlace = word.charAt(0) === "S";
  const wordLen = word.length === 5;

  if (firstPlace && wordLen) {
    words5LettersWithSFirstPlace.push(word);
  }
});
console.log({ words5LettersWithSFirstPlace });

const words5LettersWithTLastPlace = [];
wordsArray.forEach((word) => {
  const lastPlace = word[word.length - 1] === "T";
  const lenOfWord = word.length === 5;

  if (lastPlace && lenOfWord) {
    words5LettersWithTLastPlace.push(word);
  }
});
console.log({ words5LettersWithTLastPlace });

const words5LettersWithLThirdPlaceAndTLastPlace = [];
wordsArray.forEach((word) => {
  const thirdPlace = word.charAt(2);
  const lastPlace = word[word.length - 1];
  const lenOfWord = word.length === 5;

  if (thirdPlace === "L" && lastPlace === "T" && lenOfWord) {
    words5LettersWithLThirdPlaceAndTLastPlace.push(word);
  }
});
console.log({ words5LettersWithLThirdPlaceAndTLastPlace });

const words5LettersWithBFirstPlaceLThirdPlaceAndTLastPlace = [];
wordsArray.forEach((word) => {
  const firstPlace = word.charAt(0) === "B";
  const thirdPlace = word.charAt(2) === "L";
  const lastPlace = word[word.length - 1] === "T";
  const lenOfWord = word.length === 5;

  if (lenOfWord && firstPlace && thirdPlace && lastPlace) {
    words5LettersWithBFirstPlaceLThirdPlaceAndTLastPlace.push(word);
  }
});
console.log({ words5LettersWithBFirstPlaceLThirdPlaceAndTLastPlace });

// 3-MINUTE WRIST BREAK

/*
[] What are all of the countries that have “United” in the name?
[] What countries both begin and end with a vowel?
[] What country names are > 50% vowels?
[] What is the shortest country name? Make sure your solution can handle ties.
[] What countries use only one vowel in their name (the vowel can be used multiple times)
    - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.
[] There is at least one country name that contains another country name. Find all of these cases.
[] What is the shortest baby name in the top 40 baby names for 2020?
[] What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

3-MINUTE WRIST BREAK

[] There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.
    [] Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?
[] What are all of the names that were top 40 baby names in both 1880 and 2020?

3-MINUTE WRIST BREAK

[] What are all of the words that both start with a “TH” and end with a “TH”?
[] What are all of the words that have only “U”s for vowels?
[] What are all of the words that have only “E”s for vowels and are at least 15 letters long?
[] What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?
[] What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

3-MINUTE WRIST BREAK
[] MadLib 
Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.

For example,

> madLib('make', 'best', 'guac');
"We shall MAKE the BEST GUAC."

[] FizzBuzz
3 and 5 are magic numbers. Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

[] Sum of N Primes
Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.

> sumOfNPrimes(0)
0

> sumOfNPrimes(1)
2

> sumOfNPrimes(4)
17

NOTE: The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. ..

[] Is Substring
Input
1) A String, called searchString.
2) A String, called subString.

Output: A Boolean. true if the subString is a part of the searchString.

> isSubstring("time to program", "time")
true

> isSubstring("Jump for joy", "joys")
false

[] Is Prime
Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

> isPrime(2)
true

> isPrime(10)
false

> isPrime(15485863)
true

> isPrime(3548563)
false

3-MINUTE WRIST BREAK

[] What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.
[] What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.
[] What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. 
[] What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties. 

3-MINUTE WRIST BREAK 

[] Write a function that takes a string `substring` as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).
[] Write a function that takes a string `prefix` as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).
[] Write a function that takes a string `prefix` as the first argument, a string `suffix` as the second argument, and an integer `length` as the third argument. It should return an array of all of the words that start with that prefix, end with that suffix, and are that length.
[] Write a function that takes a string `word` as an argument and returns a count of all of the “A”s in that string.
[] Write a function that takes a string `word` as the first argument, a string `letter` as the second argument, and returns a count of how many times `letter` occurs in `word`.
[] Write a function that takes a string `phrase` and returns a dictionary contains counts of how many times every character appears in `phrase`.

3-MINUTE WRIST BREAK

[] Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
[] Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
[] Which teams have made it to the NBA finals but have never won?
[] Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: <etc>

3-MINUTE WRIST BREAK

[] Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
    These were the number one songs of 2000:
    "Try Again" - Aaliyah
    "Say My Name" - Destiny's Child
    "What A Girl Wants" - Christina Aguilera
    "Maria Maria" - Santana Featuring The Product G&B
    "Smooth" - Santana Featuring Rob Thomas
    "Independent Women Part I" - Destiny's Child
[] What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?
[] What artist had the most songs chart in 2000, and what were those songs?
[] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

3-MINUTE WRIST BREAK

[] What is the longest word that has no repeating letters?
[] What are all of the words that are at least 8 letters long and use 3 or fewer different letters? For example, “REFERRER” is an answer to this question, because it uses only 3 different letters: R, E, and F.
[] What are all of the words that have at least 3 different double letters? For example, “BOOKKEEPER” is an answer to this question because it has a double-O, a double-K, and a double-E.
[] Write a function that takes a string `availableLetters` as an argument and returns an array of all of the words that can be made from only those letters. Letters can be re-used as many times as needed and can appear in any order. Not all of the letters in `availableLetters` have to be used.
[ ] Find the longest word and its ties that has each letter it contains no more than once.
[] What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.
[] Find the longest word and its ties that has each letter it contains no more than once.
[] Finding alphabet chains:
    - First, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?
        - For example, “FEEDBACK” is an answer to this question
    - Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain.

*/
