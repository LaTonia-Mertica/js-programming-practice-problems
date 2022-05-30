const fs = require("fs");

/* BABY NAMES
        [x] What is the shortest baby name in the top 40 baby names 
           for 2020 - and handle ties?
        [x] What are the longest baby names in the top 40 baby 
           names for 2020 (handle ties)? 
        [x] What are all of the names that were top 40 baby names  
           in both 1880 and 2020?
       
        Find baby names in 2020 that when spelled backwards are 
           valid scrabble words.
           Solve this two ways: 
                [x] with an array to hold the Scrabble words
                [x] with a dictionary/set to hold the Scrabble words
                [x] time both implementations */
const babynames1880Str = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babynames2020Str = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babyname1880Arr = babynames1880Str.split("\n");
const babyname2020Arr = babynames2020Str.split("\n");

const moreWordStrs = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const moreWordArr = moreWordStrs.split("\n");

let shortest2020Babyname;
let allShortest2020Babynames = [];

for (const name of babyname2020Arr) {
  if (!shortest2020Babyname || name.length < shortest2020Babyname.length) {
    shortest2020Babyname = name;
    allShortest2020Babynames = [name];
  } else if (name.length === shortest2020Babyname.length) {
    allShortest2020Babynames.push(name);
  }
}
// console.log({ shortest2020Babyname }, { allShortest2020Babynames });

let longest2020Babyname;
let allLongest2020Babynames = [];

for (const name of babyname2020Arr) {
  if (!longest2020Babyname || name.length > longest2020Babyname.length) {
    longest2020Babyname = name;
    allLongest2020Babynames = [name];
  } else if (name.length === longest2020Babyname.length) {
    allLongest2020Babynames.push(name);
  }
}
// console.log({ longest2020Babyname }, { allLongest2020Babynames });

const namesInBothYears = [];
for (const name2020 of babyname2020Arr) {
  for (const name1880 of babyname1880Arr) {
    if (name1880 === name2020) {
      namesInBothYears.push(name1880 || name2020);
    }
  }
}
// console.log({ namesInBothYears });

const theNames = [];
const thoseNamesAsScrabbleWords = [];

for (let i = 0; i < babyname2020Arr.length; i++) {
  const name = babyname2020Arr[i];
  const nameReversed = name.split("").reverse().join("");
  for (let j = 0; j < moreWordArr.length; j++) {
    const word = moreWordArr[j];
    if (nameReversed === word) {
      theNames.push(name);
      thoseNamesAsScrabbleWords.push(nameReversed);
    }
  }
}
const startTime = performance.now();
// console.log({ theNames }, { thoseNamesAsScrabbleWords });
const endTime = performance.now();
// console.log(endTime - startTime + " MS ARRAY RUN TIME");

const namesViaObj = [];
const thoseNamesViaObjAsScrabbleWords = [];

const nameObj = {};
for (const word of moreWordArr) {
  nameObj[word] = "";
}

for (const name of babyname2020Arr) {
  const nameReversed = name.split("").reverse().join("");
  if (nameReversed in nameObj) {
    namesViaObj.push(name);
    thoseNamesViaObjAsScrabbleWords.push(nameReversed);
  }
}
const timeStart = performance.now();
// console.log({ namesViaObj }, { thoseNamesViaObjAsScrabbleWords });
const timeEnd = performance.now();
// console.log(timeEnd - timeStart + " MS OBJECT RUN TIME");

/* COUNTRIES
        [x] What countries have “United” in the name?
        [x] What countries both begin and end with a vowel? 
        [x] What is the shortest country name - and handle ties?
        [x] What country names contain another country name? 
  
        [x] What country names are > 50% vowels?
        [x] What countries use only one vowel in their name (vowel 
           can be used multiple times)? */
const countriesStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countriesArr = countriesStr.split("\n");

const unitedCountryNames = [];

for (const country of countriesArr) {
  if (country.includes("UNITED")) {
    unitedCountryNames.push(country);
  }
}
// console.log({ unitedCountryNames });

const vowelStartAndEndCountryNames = [];

for (const country of countriesArr) {
  if (
    country.startsWith("A" || "E" || "I" || "O" || "U") &&
    country.endsWith("A" || "E" || "I" || "O" || "U")
  ) {
    vowelStartAndEndCountryNames.push(country);
  }
}
// console.log({ vowelStartAndEndCountryNames });

let shortestCountryName;
let allShortestCountryNames = [];

for (const country of countriesArr) {
  if (!shortestCountryName || country.length < shortestCountryName.length) {
    shortestCountryName = country;
    allShortestCountryNames = [country];
  } else if (country.length === shortestCountryName.length) {
    allShortestCountryNames.push(country);
  }
}
// console.log({ shortestCountryName }, { allShortestCountryNames });

let bigCountry;
const bigCountryNames = [];
let smCountry;
const smCountryNames = [];

for (const bigCountry of countriesArr) {
  for (const smCountry of countriesArr) {
    if (bigCountry === smCountry) {
      break;
    } else if (bigCountry.includes(smCountry)) {
      bigCountryNames.push(bigCountry);
      smCountryNames.push(smCountry);
    }
  }
}
// console.log({ smCountryNames }, { bigCountryNames });

const vowels = ["A", "E", "I", "O", "U"];
let vowelCount = 0;
const invalidChars = [" ", ".", "-", "(", ")"];
let invalidCharsCount = 0;

const countryNamesOver50PercentVowels = [];

for (const country of countriesArr) {
  const usableCountryLength = country.length - invalidCharsCount;
  for (const letter of country) {
    if (vowels.includes(letter)) {
      vowelCount++;
    } else if (invalidChars.includes(letter)) {
      invalidCharsCount++;
    }
  }
  if (vowelCount / usableCountryLength > 0.5) {
    countryNamesOver50PercentVowels.push(country);
  }
}
// console.log({ countryNamesOver50PercentVowels });

const vowelList = ["A", "E", "I", "O", "U", "Y"];
const multiVowelCountryNames = [];
const oneVowelCountryNames = [];

for (const country of countriesArr) {
  if (country.includes("A" || "E" || "I" || "O" || "U" || "Y")) {
    multiVowelCountryNames.push(country);
  }

  let hasOneVowel = true;
  let firstVowel = null;

  for (const letter of country) {
    if (vowelList.includes(letter)) {
      if (firstVowel === null) {
        firstVowel = letter;
      } else if (letter !== firstVowel) {
        hasOneVowel = false;
      }
    }
  }

  if (hasOneVowel) {
    oneVowelCountryNames.push(country);
  }
}
// console.log({ oneVowelCountryNames });

/* MISCELLANEOUS
        [x] What are all of the words that can only be made from 
           the letters “R”, “S”, “T”, “L”, “N”, and “E”? */
const miscWordStrs = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const miscWordArr = miscWordStrs.split("\n");

const specifiedLetters = ["R", "S", "T", "L", "N", "E"];
const wordsMadeOfSpecifiedLettersOnly = [];

for (let i = 0; i < miscWordArr.length; i++) {
  const word = miscWordArr[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!specifiedLetters.includes(letter)) {
      break;
    } else if (j === word.length - 1) {
      wordsMadeOfSpecifiedLettersOnly.push(word);
    }
  }
}
// console.log({ wordsMadeOfSpecifiedLettersOnly });

/* TOP MOVIES
        [x] What movies on this list were distributed by 
           DreamWorks? 
        [x] What is the highest grossing movie from Universal  
           Pictures, domestically?
         
        [x] What distributor has the most films on this list?
        [x] What is the earliest year on this list, and what were 
           the films from that year?
        [x] What is the distribution of ratings? (How many are PG, 
           PG-13, R, etc.?) */
const topmoviesStr = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const topmoviesArr = topmoviesStr.split("\r\n");

const dreamworksMovies = [];

for (const row of topmoviesArr) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const year = parseInt(element[2]);
  const domesticSales = element[3];
  const internationalSales = element[4];
  const runTime = element[5];
  const rating = element[6];

  if (distributor.includes("DREAM")) {
    dreamworksMovies.push(title);
  }
}
// console.log({ dreamworksMovies });

const filmObj = {
  sales: 0,
  title: "",
};

let highestGrossingUniversalPixFilm;

for (const row of topmoviesArr) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const year = parseInt(element[2]);
  const domesticSales = element[3];
  const internationalSales = element[4];
  const runTime = element[5];
  const rating = element[6];

  if (filmObj["sales"] === undefined) {
    filmObj["sales"] = 1;
  } else {
    filmObj["sales"]++;
  }

  if (distributor.includes("UNIVERSAL")) {
    if (domesticSales > filmObj["sales"]) {
      filmObj["sales"] = domesticSales;
      highestGrossingUniversalPixFilm = title;
    }
  }
}
// console.log({ highestGrossingUniversalPixFilm });

let distributorWithMostFilmsListed;
let highestFilmCount = 0;
let distributorObj = {};

for (const row of topmoviesArr) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const year = parseInt(element[2]);
  const domesticSales = element[3];
  const internationalSales = element[4];
  const runTime = element[5];
  const rating = element[6];

  if (distributorObj[distributor] === undefined) {
    distributorObj[distributor] = 1;
  } else {
    distributorObj[distributor]++;
  }

  if (distributorObj[distributor] > highestFilmCount) {
    highestFilmCount = distributorObj[distributor];
    distributorWithMostFilmsListed = distributor;
  }
}
// console.log({ distributorWithMostFilmsListed });

let earliestYear;
let earliestFilm;
let allEarliestFilms = [];

for (const row of topmoviesArr) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const year = parseInt(element[2]);
  const domesticSales = element[3];
  const internationalSales = element[4];
  const runTime = element[5];
  const rating = element[6];

  if (!earliestYear || year < earliestYear) {
    earliestYear = year;
    earliestFilm = title;
    allEarliestFilms = [title];
  } else if (year === earliestYear) {
    allEarliestFilms.push(title);
  }
}
// console.log({ earliestYear }, { earliestFilm }, { allEarliestFilms });

const ratingDistributions = {};
const ratings = ["G", "PG", "PG-13", "NA", "R"];

for (const row of topmoviesArr) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const year = parseInt(element[2]);
  const domesticSales = element[3];
  const internationalSales = element[4];
  const runTime = element[5];
  const rating = element[6];

  if (!ratings.includes(rating)) {
    continue;
  }

  if (ratingDistributions[rating] === undefined) {
    ratingDistributions[rating] = 1;
  } else {
    ratingDistributions[rating]++;
  }
}

// console.log({ ratingDistributions });

/* WORDPLAY
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
            alphabetical order? ... duplicate letters ok
		 [x] How many words contain the substring "TYPE”?
		 [x] Create and print an array containing all of the words 
            that end in "GHTLY"
		 [x] What is the shortest word that contains all 5 vowels?
		 [x] What is the longest word that contains no vowels?
		 [x] Which of the letters Q, X, and Z is the least common?
		 [x] What is the longest palindrome?
		 [x] What are all of the letters that never appear 
            consecutively in an English word? */
const wordplayStrs = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordplayArr = wordplayStrs.split("\n");

const uuWords = [];

for (const word of wordplayArr) {
  if (word.includes("UU")) {
    uuWords.push(word);
  }
}
// console.log({ uuWords });

const xyzWords = [];

for (const word of wordplayArr) {
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    xyzWords.push(word);
  }
}
// console.log({ xyzWords });

const qNotUWords = [];

for (const word of wordplayArr) {
  if (word.includes("Q") && !word.includes("U")) {
    qNotUWords.push(word);
  }
}
// console.log({ qNotUWords });

const fiveLetterCatWords = [];

for (const word of wordplayArr) {
  if (word.includes("CAT") && word.length === 5) {
    fiveLetterCatWords.push(word);
  }
}
// console.log({ fiveLetterCatWords });

const noEOrAAtLeast15LetterWords = [];

for (const word of wordplayArr) {
  if (!word.includes("E") && !word.includes("A") && word.length >= 15) {
    noEOrAAtLeast15LetterWords.push(word);
  }
}
// console.log({ noEOrAAtLeast15LetterWords });

const bAndXUnder5LetterWords = [];

for (const word of wordplayArr) {
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    bAndXUnder5LetterWords.push(word);
  }
}
// console.log({ bAndXUnder5LetterWords });

const yStartAndEndWords = [];

for (const word of wordplayArr) {
  if (word.startsWith("Y") && word.endsWith("Y")) {
    yStartAndEndWords.push(word);
  }
}
// console.log({ yStartAndEndWords });

const noVowelNotEvenLetterYWords = [];

for (const word of wordplayArr) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    noVowelNotEvenLetterYWords.push(word);
  }
}
// console.log({ noVowelNotEvenLetterYWords });

const vowelsAnyOrderWords = [];

for (const word of wordplayArr) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    vowelsAnyOrderWords.push(word);
  }
}
// console.log({ vowelsAnyOrderWords });

const vowelsAlphaOrderWords = [];

for (const word of wordplayArr) {
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
      vowelsAlphaOrderWords.push(word);
    }
  }
}
// console.log({ vowelsAlphaOrderWords });

let typeCount = 0;
const typeWords = [];

for (const word of wordplayArr) {
  if (word.includes("TYPE")) {
    typeCount++;
    typeWords.push(word);
  }
}
// console.log({ typeCount }, { typeWords });

const ghtlyEndWords = [];

for (const word of wordplayArr) {
  if (word.endsWith("GHTLY")) {
    ghtlyEndWords.push(word);
  }
}
// console.log({ ghtlyEndWords });

let shortestWordWithAll5Vowels;
let allShortestWordsWithAll5Vowels = [];

for (const word of wordplayArr) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (
      !shortestWordWithAll5Vowels ||
      word.length < shortestWordWithAll5Vowels.length
    ) {
      shortestWordWithAll5Vowels = word;
      allShortestWordsWithAll5Vowels = [word];
    } else if (word.length === shortestWordWithAll5Vowels.length) {
      allShortestWordsWithAll5Vowels.push(word);
    }
  }
}
// console.log({ shortestWordWithAll5Vowels }, { allShortestWordsWithAll5Vowels });

let longestWordNoVowels;
let allLongestWordsNoVowels = [];

for (const word of wordplayArr) {
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    if (!longestWordNoVowels || word.length > longestWordNoVowels.length) {
      longestWordNoVowels = word;
      allLongestWordsNoVowels = [word];
    } else if (word.length === longestWordNoVowels.length) {
      allLongestWordsNoVowels.push(word);
    }
  }
}
// console.log({ longestWordNoVowels }, { allLongestWordsNoVowels });

let qCount = 0;
let xCount = 0;
let zCount = 0;

for (const word of wordplayArr) {
  if (word.includes("Q")) {
    qCount++;
  } else if (word.includes("X")) {
    xCount++;
  } else if (word.includes("Z")) {
    zCount++;
  }
}

if (qCount < (xCount && zCount)) {
  console.log("LETTER Q IS LEAST COMMON");
} else if (xCount < (qCount && zCount)) {
  console.log("LETTER X IS LEAST COMMON");
} else if (zCount < (qCount && xCount)) {
  console.log("LETTER Z IS LEAST COMMON");
}
// console.log({ qCount }, { xCount }, { zCount });

let longestPalindrome;

for (const word of wordplayArr) {
  const wordReversed = word.split("").reverse().join("");

  if (wordReversed === word) {
    if (!longestPalindrome || wordReversed.length > longestPalindrome.length) {
      longestPalindrome = wordReversed;
    }
  }
}
// console.log({ longestPalindrome });

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
const allTheWords = [];
allTheWords.push(wordplayStrs);

const singleOccurrenceOnlyLetters = [];

for (const letter of alphabet) {
  for (const word of allTheWords) {
    if (word.includes(letter + letter)) {
      break;
    } else {
      singleOccurrenceOnlyLetters.push(letter);
    }
  }
}
// console.log({ singleOccurrenceOnlyLetters });
