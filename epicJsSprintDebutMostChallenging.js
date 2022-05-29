const fs = require("fs");

const scrabbleWordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const scrabbleWordArr = scrabbleWordStr.split("\n");

/* BABY NAMES
         Find baby names in 2020 that when spelled backwards are 
         valid scrabble words.
            Solve this two ways: 
                [x] with an array to hold the Scrabble words
                [x] with a dictionary/set to hold the Scrabble words
                [x] time both implementations
                */
const babyNamesStr = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const babyNamesArr = babyNamesStr.split("\n");

// ARRAY METHOD
const getWordsMadeFromBabyNamesSpelledBackwards = () => {
  const wordsMadeFromBabyNamesSpelledBackwards = [];
  for (let i = 0; i < babyNamesArr.length; i++) {
    const babyName = babyNamesArr[i];
    const babyNameReversed = babyName
      .split("")
      .reverse()
      .join("")
      .toUpperCase();
    for (const word of scrabbleWordArr) {
      if (babyNameReversed === word) {
        wordsMadeFromBabyNamesSpelledBackwards.push(babyNameReversed);
      }
    }
  }
  return wordsMadeFromBabyNamesSpelledBackwards;
};
const timeGo = performance.now();
console.log(getWordsMadeFromBabyNamesSpelledBackwards());
const timeStop = performance.now();
const runTime = Math.floor(timeStop - timeGo);
console.log(runTime + " MS ARRAY RUN TIME");

// DICTIONARY METHOD
const getWordsCreatedFromNamesReversed = () => {
  const wordObj = {};
  const wordsCreatedFromNamesReversed = [];
  for (const word of scrabbleWordArr) {
    wordObj[word] = "";
  }
  for (let i = 0; i < babyNamesArr.length; i++) {
    const babyName = babyNamesArr[i];
    const babyNameReversed = babyName.split("").reverse().join("");
    if (babyNameReversed in wordObj) {
      wordsCreatedFromNamesReversed.push(babyNameReversed);
    }
  }
  return wordsCreatedFromNamesReversed;
};
const runStart = performance.now();
console.log(getWordsCreatedFromNamesReversed());
const runStop = performance.now();
const timeToRun = Math.floor(runStop - runStart);
console.log(timeToRun + " MS DICT RUN TIME");

/*
COUNTRIES
        [x] What country names are > 50% vowels?
        [x] What countries use only one vowel in their name (vowel 
           can be used multiple times)?
*/
const countriesStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countriesArr = countriesStr.split("\n");

const getOver50PercentVowelsCountryNames = () => {
  const vowels = ["A", "E", "I", "O", "U"];
  let vowelCount = 0;
  const invalidChars = [" ", "'", "(", ")", "-", "′"];
  let invalidCharCount = 0;

  const over50PercentVowels = [];

  for (const country of countriesArr) {
    const countryLengthToUse = country.length - invalidCharCount;
    for (const letter of country) {
      if (vowels.includes(letter)) {
        vowelCount++;
      } else if (invalidChars.includes(letter)) {
        invalidCharCount++;
      }
    }
    if (vowelCount / countryLengthToUse > 0.5) {
      over50PercentVowels.push(country);
    }
  }
  return over50PercentVowels;
};
console.log(getOver50PercentVowelsCountryNames());

const getOneVowelCountryNames = () => {
  const vowels = ["A", "E", "I", "O", "U", "Y"];
  const multiVowelCountryNames = [];
  const oneVowelCountryNames = [];

  for (const country of countriesArr) {
    if (
      country.includes("A") ||
      country.includes("E") ||
      country.includes("I") ||
      country.includes("O") ||
      country.includes("U") ||
      country.includes("Y")
    ) {
      multiVowelCountryNames.push(country);
    }

    let onlyOneVowel = true;
    let firstVowel = null;

    for (const letter of country) {
      if (vowels.includes(letter)) {
        if (firstVowel === null) {
          firstVowel = letter;
        } else if (letter !== firstVowel) {
          onlyOneVowel = false;
        }
      }
    }
    if (onlyOneVowel) {
      oneVowelCountryNames.push(country);
    }
  }
  return oneVowelCountryNames;
};
console.log(getOneVowelCountryNames());

/*
TOP MOVIES
        [x] What distributor has the most films on this list?
        [x] What is the earliest year on this list, and what were 
           the films from that year?
        [x] What is the distribution of ratings? (How many are PG, 
           PG-13, R, etc.?) 
*/
const topMoviesStr = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const topMoviesArr = topMoviesStr.split("\r\n");

const getDistributorWithMostReleases = () => {
  let distributorWithMostReleases;
  let releaseCount = 0;
  const distributorObj = {};

  for (const row of topMoviesArr) {
    const element = row.split(",");
    const title = element[0];
    const distributor = element[1];
    const releaseDate = element[2];
    const domesticSales = element[3];
    const internationalSales = element[4];
    const runTime = element[5];
    const rating = element[6];

    if (distributorObj[distributor] === undefined) {
      distributorObj[distributor] = 1;
    } else {
      distributorObj[distributor]++;
    }
    if (
      !distributorWithMostReleases ||
      releaseCount < distributorObj[distributor]
    ) {
      releaseCount = distributorObj[distributor];
      distributorWithMostReleases = distributor;
    }
  }

  return (
    distributorWithMostReleases +
    " IS THE DISTRIBUTOR WITH MOST RELEASES WITH " +
    releaseCount +
    " RELEASES"
  );
};
console.log(getDistributorWithMostReleases());

const getEarliestYearAndFilm = () => {
  let earliestYear;
  let earliestFilm;
  let allEarliest = [];

  for (const row of topMoviesArr) {
    const element = row.split(",");
    const title = element[0];
    const distributor = element[1];
    const releaseDate = parseInt(element[2]);
    const domesticSales = element[3];
    const internationalSales = element[4];
    const runTime = element[5];
    const rating = element[6];

    if (!earliestYear || releaseDate < earliestYear) {
      earliestYear = releaseDate;
      earliestFilm = title;
      allEarliest = [title];
    } else if (releaseDate === earliestYear) {
      allEarliest.push(title);
    }
  }
  return "\n" + earliestYear + "\n" + allEarliest + "\n";
};
console.log(getEarliestYearAndFilm());

const getRatingsDistribution = () => {
  const ratings = ["G", "PG", "P-13", "NA", "R"];
  const ratingObj = {};

  for (const row of topMoviesArr) {
    const element = row.split(",");
    const title = element[0];
    const distributor = element[1];
    const releaseDate = element[2];
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
  return ratingObj;
};
console.log(getRatingsDistribution());
