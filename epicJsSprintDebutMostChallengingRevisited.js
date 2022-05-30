// THIS SET IS PART TWO TO EPIC JS SPRINT DEBUT PART 1
// THIS IS EPIC JS SPRINT DEBUT PART 2

const fs = require("fs");

const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");

/* BABY NAMES
   Find baby names in 2020 that when spelled backwards are 
      valid scrabble words.
      Solve this two ways: 
                [x] with an array to hold the Scrabble words
                [x] with a dictionary/set to hold the Scrabble words
                [x] time both implementations */
const babyNameStr = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babyNameArr = babyNameStr.split("\n");

const theNames = [];
const namesThatAreScrabbleWordsWhenBackwards = [];
for (let i = 0; i < babyNameArr.length; i++) {
  const name = babyNameArr[i];
  const nameReversed = name.split("").reverse().join("");
  for (const word of wordArr) {
    if (nameReversed === word) {
      theNames.push(name);
      namesThatAreScrabbleWordsWhenBackwards.push(nameReversed);
    }
  }
}
const startTimer = performance.now();
console.log("\n", { theNames }, { namesThatAreScrabbleWordsWhenBackwards });
const endTimer = performance.now();
const timedArr = Math.ceil(endTimer - startTimer);
console.log(timedArr + " MS ARRAY RUN TIME\n");

const wordObj = {};
for (const word of wordArr) {
  wordObj[word] = "";
}
const scrabbleWordMatchesFromReversedNames = [];
const scrabbleWordsFromNamesSpelledBackwards = [];
for (const name of babyNameArr) {
  const nameInReverse = name.split("").reverse().join("");
  if (nameInReverse in wordObj) {
    scrabbleWordMatchesFromReversedNames.push(name);
    scrabbleWordsFromNamesSpelledBackwards.push(nameInReverse);
  }
}
const timerRun = performance.now();
console.log(
  "\n",
  { scrabbleWordMatchesFromReversedNames },
  { scrabbleWordsFromNamesSpelledBackwards }
);
const timerEnd = performance.now();
const objTimed = Math.ceil(timerEnd - timerRun);
console.log(objTimed + " MS OBJ RUN TIME\n");

/*
COUNTRIES
        [x] What country names are > 50% vowels?
        [x] What countries use only one vowel in their name? */
const countryNameStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryNameArr = countryNameStr.split("\n");

const vowels = ["A", "E", "I", "O", "U"];
let vowelCount = 0;
const invalidChars = [" ", ".", "-", "(", ")"];
let invalidCharsCount = 0;
const countryNamesOver50PercentVowels = [];
for (let i = 0; i < countryNameArr.length; i++) {
  const country = countryNameArr[i];
  const trueCountryNameLength = country.length - invalidCharsCount;
  for (let j = 0; j < country.length; j++) {
    const letter = country[j];
    if (vowels.includes(letter)) {
      vowelCount++;
    } else if (invalidChars.includes(letter)) {
      invalidCharsCount++;
    }
  }
  if (vowelCount / trueCountryNameLength > 0.5) {
    countryNamesOver50PercentVowels.push(country);
  }
}
console.log({ countryNamesOver50PercentVowels }, "\n");

const multiVowelCountryNames = [];
const oneVowelCountryNames = [];
for (let i = 0; i < countryNameArr.length; i++) {
  const country = countryNameArr[i];
  let hasOneVowel = true;
  let firstVowel = null;
  if (
    country.includes("A") ||
    country.includes("E") ||
    country.includes("I") ||
    country.includes("O") ||
    country.includes("U")
  ) {
    multiVowelCountryNames.push(country);
  }
  for (let j = 0; j < country.length; j++) {
    const letter = country[j];
    if (vowels.includes(letter)) {
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
console.log({ oneVowelCountryNames }, "\n");

/* TOP MOVIES
        [x] What distributor has the most films on this list?
        [x] What is the earliest year on this list, and what were the films from that year?
        [x] What is the distribution of ratings? (How many are PG,PG-13, R, etc.?) */
const topMovieStr = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const topMovieArr = topMovieStr.split("\r\n");

let distributorWithMostReleases;
let distributorReleasesCount = 0;
const distributorObj = {};
for (let i = 0; i < topMovieArr.length; i++) {
  const row = topMovieArr[i];
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const year = element[2];
  const domesticSales = element[3];
  const internationalSales = element[4];
  const runTime = element[5];
  const rating = element[6];
  if (distributorObj[distributor] === undefined) {
    distributorObj[distributor] = 1;
  } else {
    distributorObj[distributor]++;
  }
  if (distributorObj[distributor] > distributorReleasesCount) {
    distributorWithMostReleases = distributor;
    distributorReleasesCount = distributorObj[distributor];
  }
}
console.log({ distributorWithMostReleases }, "\n");

let earliestYear;
let earliestFilm;
let allEarliestFilms = [];
for (const row of topMovieArr) {
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
console.log({ earliestYear }, { earliestFilm }, { allEarliestFilms }, "\n");

const ratings = ["G", "PG", "PG-13", "NA", "R"];
const ratingObj = {};
for (const row of topMovieArr) {
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
  } else if (ratingObj[rating] === undefined) {
    ratingObj[rating] = 1;
  } else {
    ratingObj[rating]++;
  }
}
console.log({ ratingObj });
