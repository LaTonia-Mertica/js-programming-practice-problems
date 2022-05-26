/*
BABY NAMES
        [x] What is the shortest baby name in the top 40 baby names 
           for 2020 - and handle ties?
        [x] What are the longest baby names in the top 40 baby 
           names for 2020 (handle ties)? 
        [x] What are all of the names that were top 40 baby names  
           in both 1880 and 2020?
       
        [x] Find baby names in 2020 that when spelled backwards are 
           valid scrabble words.
            [x] Solve this two ways: 
                [x] with an array to hold the Scrabble words
                [x] with a dictionary/set to hold the Scrabble words
                [x] time both implementations

COUNTRIES
        [x] What countries have “United” in the name?
        [x] What countries both begin and end with a vowel? 
        [x] What is the shortest country name - and handle ties?
        [x] What country names contain another country name? 
  
        [x] What country names are > 50% vowels?
        [x] What countries use only one vowel in their name (vowel 
           can be used multiple times)?

MISCELLANEOUS
        [x] What are all of the words that can only be made from 
           the letters “R”, “S”, “T”, “L”, “N”, and “E”?

TOP MOVIES
        [x] What movies on this list were distributed by 
           DreamWorks? 
        [x] What is the highest grossing movie from Universal  
           Pictures, domestically?
         
        [x] What distributor has the most films on this list?
        [x] What is the earliest year on this list, and what were 
           the films from that year?
        [x] What is the distribution of ratings? (How many are PG, 
           PG-13, R, etc.?) 

WORDPLAY
		 [x] What are all of the words containing UU?
		 [x] What are all of the words containing an X and a Y and  
            a Z? ... order irrelevant
		 [x] What are all of the words containing a Q but not a U?
		 [x] What are all of the words that contain the word CAT 
            and are exactly 5 letters long?
		 [x] What are all of the words that have no E or A and are 
            at least 15 letters long?
		 [x] What are all of the words that have a B and an X and 
            are less than 5 letters long?
		 [x] What are all of the words that start and end with a Y?
		 [x] What are all of the words with no vowel and not even a 
            Y?
		 [x] What are all of the words that have all 5 vowels, in 
            any order?
		 [x] What are all of the words that have all 5 vowels, in 
            alphabetical order? ... duplicates ok
		 [x] How many words contain the substring "TYPE”?
		 [x] Create and print an array containing all of the words 
            that end in "GHTLY"
		 [x] What is the shortest word that contains all 5 vowels?
		 [x] What is the longest word that contains no vowels?
		 [x] Which of the letters Q, X, and Z is the least common?
		 [x] What is the longest palindrome?
		 [x] What are all of the letters that never appear 
            consecutively in an English word?
*/

// file system fs declaration will be for use with all subsequent
const fs = require("fs");
// while remaining part of file system will be specific to section
const nameStrings = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nameArray = nameStrings.split("\n");

let shortestBabyNameOfYear2020;
let allShortestBabyNamesOfYear2020 = [];
for (let i = 0; i < nameArray.length; i++) {
  const name = nameArray[i];
  if (
    !shortestBabyNameOfYear2020 ||
    name.length < shortestBabyNameOfYear2020.length
  ) {
    shortestBabyNameOfYear2020 = name;
    allShortestBabyNamesOfYear2020 = [name];
  } else if (name.length === shortestBabyNameOfYear2020.length) {
    allShortestBabyNamesOfYear2020.push(name);
  }
}
console.log({ shortestBabyNameOfYear2020 }, { allShortestBabyNamesOfYear2020 });
// only one 3-letter name in year 2020

let longestBabyNameOfYear2020;
let allLongestBabyNamesOfYear2020 = [];
for (let i = 0; i < nameArray.length; i++) {
  const name = nameArray[i];
  if (
    !longestBabyNameOfYear2020 ||
    name.length > longestBabyNameOfYear2020.length
  ) {
    longestBabyNameOfYear2020 = name;
    allLongestBabyNamesOfYear2020 = [name];
  } else if (name.length === longestBabyNameOfYear2020.length) {
    allLongestBabyNamesOfYear2020.push(name);
  }
}
console.log({ longestBabyNameOfYear2020 }, { allLongestBabyNamesOfYear2020 });

const name1880Strings = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const name1880Array = name1880Strings.split("\n");
const name2020Strings = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const name2020Array = name2020Strings.split("\n");

const namesInBothYears2020And1880 = [];
for (const name1880 of name1880Array) {
  for (const name2020 of name2020Array) {
    if (name1880 === name2020) {
      namesInBothYears2020And1880.push(name2020 || name1880);
    }
  }
}
console.log({ namesInBothYears2020And1880 });

// const fs = require("fs");
const countryStrings = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArray = countryStrings.split("\n");

const allCountryNamesContainingUnited = [];
for (let i = 0; i < countryArray.length; i++) {
  const country = countryArray[i];
  if (country.includes("UNITED")) {
    allCountryNamesContainingUnited.push(country);
  }
}
console.log({ allCountryNamesContainingUnited });

const vowels = ["A", "E", "I", "O", "U"];
const countryNamesThatStartAndEndWithAVowel = [];
for (const country of countryArray) {
  const firstLetter = country.charAt(0);
  const lastLetter = country[country.length - 1];
  console.log({ lastLetter });
  if (vowels.includes(firstLetter) && vowels.includes(lastLetter)) {
    countryNamesThatStartAndEndWithAVowel.push(country);
  }
}
console.log({ countryNamesThatStartAndEndWithAVowel });

let shortestCountryName;
let allShortestCountryNames = [];
for (const country of countryArray) {
  if (!shortestCountryName || country.length < shortestCountryName.length) {
    shortestCountryName = country;
    allShortestCountryNames = [country];
  } else if (country.length === shortestCountryName.length) {
    allShortestCountryNames.push(country);
  }
}
console.log({ shortestCountryName }, { allShortestCountryNames });

const countryNamesInOtherCountryNames = [];
const countryNamesWithOtherCountryNamesInThem = [];
for (const bigCountry of countryArray) {
  for (const tinyCountry of countryArray) {
    if (bigCountry === tinyCountry) {
      continue;
    } else if (bigCountry.includes(tinyCountry)) {
      countryNamesWithOtherCountryNamesInThem.push(bigCountry);
      countryNamesInOtherCountryNames.push(tinyCountry);
    }
  }
}
console.log(
  { countryNamesWithOtherCountryNamesInThem },
  { countryNamesInOtherCountryNames }
);

// this question uses sowpods - the scrabble words list
// const fs = require("fs");
const scrabbleWordsStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const scrabbleWordsArray = scrabbleWordsStrings.split("\n");

const validLetters = ["R", "S", "T", "L", "N", "E"];
const wordsCreatedByValidLettersOnly = [];
for (let i = 0; i < scrabbleWordsArray.length; i++) {
  const word = scrabbleWordsArray[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!validLetters.includes(letter)) {
      break;
    } else if (j === word.length - 1) {
      wordsCreatedByValidLettersOnly.push(word);
    }
  }
}
console.log({ wordsCreatedByValidLettersOnly });

// const fs = require("fs");
const movieStrings = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const movieArray = movieStrings.split("\r\n");

const moviesDistributedByDreamworks = [];
for (const row of movieArray) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  if (distributor.includes("DREAM")) {
    moviesDistributedByDreamworks.push(title);
  }
}
console.log({ moviesDistributedByDreamworks });

const highestGrossingDomesticUniversalPixFilm = {
  sales: 0,
  movie: "",
};
for (const row of movieArray) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const usaSales = parseInt(element[3]);
  if (distributor.includes("UNIVERSAL")) {
    if (usaSales > highestGrossingDomesticUniversalPixFilm.sales) {
      highestGrossingDomesticUniversalPixFilm.sales = usaSales;
      highestGrossingDomesticUniversalPixFilm.movie = title;
    }
  }
}
console.log({ highestGrossingDomesticUniversalPixFilm });

// wordplay questions also use sowpods.txt aka the scrabble words list
// const fs = require("fs");
const wordsStrings = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordsArray = wordsStrings.split("\n");

const uuWords = [];
for (const word of wordsArray) {
  if (word.includes("UU")) {
    uuWords.push(word);
  }
}
console.log({ uuWords });

const xyzWords = [];
for (const word of wordsArray) {
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    xyzWords.push(word);
  }
}
console.log({ xyzWords });

const qButNotUWords = [];
for (const word of wordsArray) {
  if (word.includes("Q") && !word.includes("U")) {
    qButNotUWords.push(word);
  }
}
console.log({ qButNotUWords });

const cat5LetterWords = [];
for (const word of wordsArray) {
  if (word.includes("CAT") && word.length === 5) {
    cat5LetterWords.push(word);
  }
}
console.log({ cat5LetterWords });

const noEAndNoAAndAtLeast15LetterWords = [];
for (const word of wordsArray) {
  if (!word.includes("E") && !word.includes("A") && word.length >= 15) {
    noEAndNoAAndAtLeast15LetterWords.push(word);
  }
}
console.log({ noEAndNoAAndAtLeast15LetterWords });

const bAndXUnder5LetterWords = [];
for (const word of wordsArray) {
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    bAndXUnder5LetterWords.push(word);
  }
}
console.log({ bAndXUnder5LetterWords });

const yStartAndEndWords = [];
for (const word of wordsArray) {
  if (word.charAt(0) === "Y" && word[word.length - 1] === "Y") {
    yStartAndEndWords.push(word);
  }
}
console.log({ yStartAndEndWords });

const noVowelsNotEvenYWords = [];
for (const word of wordsArray) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    noVowelsNotEvenYWords.push(word);
  }
}
console.log({ noVowelsNotEvenYWords });

// bonus ... to see difference

const noVowelsWords = [];
for (const word of wordsArray) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    noVowelsWords.push(word);
  }
}
console.log({ noVowelsWords });

const allVowelsAnyOrderWords = [];
for (const word of wordsArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    allVowelsAnyOrderWords.push(word);
  }
}
console.log({ allVowelsAnyOrderWords });

// bonus to see the difference

const allVowelsIncludingYAnyOrderWords = [];
for (const word of wordsArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U") &&
    word.includes("Y")
  ) {
    allVowelsIncludingYAnyOrderWords.push(word);
  }
}
console.log({ allVowelsIncludingYAnyOrderWords });

const allVowelsInAlphaOrderWords = [];
for (const word of wordsArray) {
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
      allVowelsInAlphaOrderWords.push(word);
    }
  }
}
console.log({ allVowelsInAlphaOrderWords });

// bonus to see the difference

const allVowelsIncludingYInAlphaOrderWords = [];
for (const word of wordsArray) {
  const aPos = word.indexOf("A");
  const ePos = word.indexOf("E");
  const iPos = word.indexOf("I");
  const oPos = word.indexOf("O");
  const uPos = word.indexOf("U");
  const yPos = word.indexOf("Y");
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U") &&
    word.includes("Y")
  ) {
    if (
      aPos < ePos &&
      ePos < iPos &&
      iPos < oPos &&
      oPos < uPos &&
      uPos < yPos
    ) {
      allVowelsIncludingYInAlphaOrderWords.push(word);
    }
  }
}
console.log({ allVowelsIncludingYInAlphaOrderWords });

let typeSubstringCount = 0;
const typeSubstringWords = [];
for (const word of wordsArray) {
  if (word.includes("TYPE")) {
    typeSubstringCount++;
    typeSubstringWords.push(word);
  }
}
console.log({ typeSubstringCount }, { typeSubstringWords });

const ghtlyEndWords = [];
for (const word of wordsArray) {
  if (word.endsWith("GHTLY")) {
    ghtlyEndWords.push(word);
  }
}
console.log({ ghtlyEndWords });

let shortestWordContainingAll5Vowels;
for (const word of wordsArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !shortestWordContainingAll5Vowels ||
      word.length < shortestWordContainingAll5Vowels.length
    ) {
      shortestWordContainingAll5Vowels = word;
    }
  }
}
console.log({ shortestWordContainingAll5Vowels });

// bonus ... same but handling ties
let wordFirstReturnedForShortestWordsContainingAll5Vowels;
let shortestWordsContainingAll5Vowels = [];
for (const word of wordsArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !wordFirstReturnedForShortestWordsContainingAll5Vowels ||
      word.length < wordFirstReturnedForShortestWordsContainingAll5Vowels.length
    ) {
      wordFirstReturnedForShortestWordsContainingAll5Vowels = word;
      shortestWordsContainingAll5Vowels = [word];
    } else if (
      word.length ===
      wordFirstReturnedForShortestWordsContainingAll5Vowels.length
    ) {
      shortestWordsContainingAll5Vowels.push(word);
    }
  }
}
console.log({ shortestWordsContainingAll5Vowels });

let longestWordNoVowels;
let longestWordsNoVowels = [];
for (const word of wordsArray) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!longestWordNoVowels || word.length > longestWordNoVowels.length) {
      longestWordNoVowels = word;
      longestWordsNoVowels = [word];
    } else if (word.length === longestWordNoVowels.length) {
      longestWordsNoVowels.push(word);
    }
  }
}
console.log({ longestWordNoVowels }, { longestWordsNoVowels });

// bonus to see the difference
let longestWordNoVowelsNotEvenLetterY;
let longestWordsNoVowelsNotEvenLetterY = [];
for (const word of wordsArray) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    if (
      !longestWordNoVowelsNotEvenLetterY ||
      word.length > longestWordNoVowelsNotEvenLetterY.length
    ) {
      longestWordNoVowelsNotEvenLetterY = word;
      longestWordsNoVowelsNotEvenLetterY = [word];
    } else if (word.length === longestWordNoVowelsNotEvenLetterY) {
      longestWordsNoVowelsNotEvenLetterY.push(word);
    }
  }
}
console.log(
  { longestWordNoVowelsNotEvenLetterY },
  { longestWordsNoVowelsNotEvenLetterY }
);

let qCount = 0;
let xCount = 0;
let zCount = 0;
for (const word of wordsArray) {
  if (word.includes("Q")) {
    qCount++;
  } else if (word.includes("X")) {
    xCount++;
  } else if (word.includes("Z")) {
    zCount++;
  }
}
// if (qCount < xCount && qCount < zCount) {
//   console.log("LETTER X IS LEAST COMMON");
// } else if (xCount < qCount && xCount < zCount) {
//   console.log("LETTER X IS LEAST COMMON");
// } else if (zCount < qCount && zCount < xCount) {
//   console.log("LETTER Z IS LEAST COMMON");
// }
console.log({ qCount }, { xCount }, { zCount });

let longestPalindrome;
for (const word of wordsArray) {
  const wordInReverse = word.split("").reverse().join("");
  if (wordInReverse === word) {
    if (!longestPalindrome || wordInReverse.length > longestPalindrome.length) {
      longestPalindrome = word;
    }
  }
}
console.log({ longestPalindrome });

// bonus ... let's see if there are ties
let longestPalindromeWord;
let longestPalindromeWords = [];
for (const word of wordsArray) {
  const wordInReverse = word.split("").reverse().join("");
  if (wordInReverse === word) {
    if (
      !longestPalindromeWord ||
      wordInReverse.length > longestPalindromeWord.length
    ) {
      longestPalindromeWord = word;
      longestPalindromeWords = [word];
    } else if (word.length === longestPalindromeWord.length) {
      longestPalindromeWords.push(word);
    }
  }
}
console.log({ longestPalindromeWord }, { longestPalindromeWords });
// no ties ...

const nonConsecutivelyAppearingLettersInEnglishLanguage = [];
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
let allWordsAsStrings = [];
allWordsAsStrings.push(wordsStrings);
for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  for (let j = 0; j < allWordsAsStrings.length; j++) {
    const word = allWordsAsStrings[j];
    if (word.includes(letter + letter)) {
      break;
    } else {
      nonConsecutivelyAppearingLettersInEnglishLanguage.push(letter);
    }
  }
}
console.log({ nonConsecutivelyAppearingLettersInEnglishLanguage });

// this question uses sowpods - the scrabble words list
// const fs = require("fs");
const scrabbleWordsStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const scrabbleWordsArr = scrabbleWordsStr.split("\n");

function getValidScrabbleWordsFromNamesSpelledBackwards() {
  const validScrabbleWords = [];
  const namesSpelledBackwards = [];
  for (const name of name2020Array) {
    for (const word of scrabbleWordsArr) {
      if (name.split("").reverse().join("").toUpperCase() === word) {
        namesSpelledBackwards.push(name);
        validScrabbleWords.push(word);
      }
    }
  }
  return (
    "\nTHE WORDS: " +
    validScrabbleWords +
    "\nFROM THE NAMES: " +
    namesSpelledBackwards
  );
}
const runTimer = new Date().getTime();
console.log(getValidScrabbleWordsFromNamesSpelledBackwards());
const stopRun = new Date().getTime();
console.log(stopRun - runTimer + " MS FOR ARRAY TO RUN\n");

function getScrabbleWordsFromReversedNames() {
  const wordDict = {};
  for (const word of scrabbleWordsArr) {
    wordDict[word] = "";
  }
  const theWords = [];
  const theNames = [];
  for (const name of name2020Array) {
    if (name.split("").reverse().join("").toUpperCase() in wordDict) {
      theNames.push(name);
      theWords.push(name.split("").reverse().join("").toUpperCase());
    }
  }
  return "\nSCRABBLE WORDS: " + theWords + "\nFROM THE NAMES: " + theNames;
}
const startRun = new Date().getTime();
console.log(getScrabbleWordsFromReversedNames());
const timerEnd = new Date().getTime();
console.log(timerEnd - startRun + " MS FOR DICT TO RUN\n");

function getThoseMoreThan50PercentVowels() {
  const vowelLetters = ["A", "E", "I", "O", "U", "Y"];
  let vowelCount = 0;
  const invalidChars = [" ", ".", "(", ")", "'", "-", "′"];
  let invalidCharsCount = 0;
  const thoseMoreThan50PercentVowels = [];
  for (const country of countryArray) {
    const usableCountryNameLength = country.length - invalidCharsCount;
    for (const letter of country) {
      if (vowelLetters.includes(letter)) {
        vowelCount++;
      } else if (invalidChars.includes(letter)) {
        invalidCharsCount++;
      }
    }
    if (vowelCount / usableCountryNameLength > 0.5) {
      thoseMoreThan50PercentVowels.push(country);
    }
  }
  return thoseMoreThan50PercentVowels;
}
console.log(getThoseMoreThan50PercentVowels());

function getJustOneVowels() {
  const moreThanOneVowels = [];
  const justOneVowels = [];
  const vowelsArray = ["A", "E", "I", "O", "U", "Y"];
  for (const country of countryArray) {
    if (
      country.includes("A") ||
      country.includes("E") ||
      country.includes("I") ||
      country.includes("O") ||
      country.includes("U") ||
      country.includes("Y")
    ) {
      moreThanOneVowels.push(country);
    }
    let hasOneVowel = true;
    let firstVowel = undefined;
    for (const letter of country) {
      if (vowelsArray.includes(letter)) {
        if (firstVowel === undefined) {
          firstVowel = letter;
        } else if (letter !== firstVowel) {
          hasOneVowel = false;
        }
      }
    }
    if (hasOneVowel) {
      justOneVowels.push(country);
    }
  }
  return justOneVowels;
}
console.log(getJustOneVowels());

const distObj = {};
for (const row of movieArray) {
  const element = row.split(",");
  const distributor = element[1];
  if (distObj[distributor] === undefined) {
    distObj[distributor] = 1;
  } else {
    distObj[distributor]++;
  }
}
let theDist = "";
let theDistCount = 0;
for (const key in distObj) {
  if (typeof theDist === "string") {
    theDist = key;
  }
  if (distObj[key] > theDistCount) {
    theDistCount = distObj[key];
    distWithMostFilms = theDist;
  }
}
console.log({ distWithMostFilms });

function getEarliestYearAndFilms() {
  let earliestFilm;
  let earliestYear;
  let allEarliestFilms = [];
  for (const row of movieArray) {
    const element = row.split(",");
    const title = element[0];
    const year = parseInt(element[2]);
    if (!earliestYear || year < earliestYear) {
      earliestYear = year;
      earliestFilm = title;
      allEarliestFilms = [title];
    } else if (year === earliestYear) {
      allEarliestFilms.push(title);
    }
  }
  return "IN " + earliestYear + " " + earliestFilm + " WAS RELEASED";
}
console.log(getEarliestYearAndFilms());

const ratings = ["G", "PG", "PG-13", "NA", "R"];
const ratingsDistributionObj = {};
for (const row of movieArray) {
  const element = row.split(",");
  const rating = element[6];
  if (!ratings.includes(rating)) {
    continue;
  } else if (ratingsDistributionObj[rating] === undefined) {
    ratingsDistributionObj[rating] = 1;
  } else {
    ratingsDistributionObj[rating]++;
  }
}
console.log({ ratingsDistributionObj });
