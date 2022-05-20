// arrange file system to read and access data provided in txt file
const fs = require("fs");
const countryStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArr = countryStr.split("\n");

/* What countries have “United” in the name? */
const collectCountryNamesThatContainUnited = [];
for (const country of countryArr) {
  if (country.indexOf("UNITED") !== -1) {
    collectCountryNamesThatContainUnited.push(country);
  }
}
console.log({ collectCountryNamesThatContainUnited });

/* What countries both begin and end with a vowel? */
const vowels = ["A", "E", "I", "O", "U"];
const countryNamesThatBeginAndEndWithAVowel = [];
for (const country of countryArr) {
  if (
    vowels.includes(country.charAt(0)) &&
    vowels.includes(country[country.length - 1])
  ) {
    countryNamesThatBeginAndEndWithAVowel.push(country);
  }
}
console.log({ countryNamesThatBeginAndEndWithAVowel });

// That's All for Part 1😊

/* What country names are > 50% vowels? */
// need to account for characters that are not letters
const countryNamesOver50PercentVowels = [];

const vowelsList = ["A", "E", "I", "O", "U"];
let invalidCharacters = [" ", ".", "-", "(", ")", "’", "'"];
//let nonVowelCount = 0;
for (const country of countryArr) {
  let vowelCount = 0;
  let invalidCharactersCount = 0;
  let countryNameLengthMinusInvalidChars =
    country.length - invalidCharactersCount;

  for (const letter of country) {
    if (vowelsList.includes(letter)) {
      vowelCount++;
    } else if (invalidCharacters.includes(letter)) {
      //nonVowelCount++;
      invalidCharactersCount++;
    }
  }
  if (vowelCount / countryNameLengthMinusInvalidChars > 0.5) {
    countryNamesOver50PercentVowels.push(country);
  }
}
console.log({ countryNamesOver50PercentVowels });
// this solution does not account for non-letter aka
// invalid characters within each country name

/* What is the shortest country name - ensure to handle ties? */
let shortestCountryName;
let shortestCountryNamesArr = [];
for (const country of countryArr) {
  if (!shortestCountryName || country.length < shortestCountryName.length) {
    shortestCountryName = country;
    shortestCountryNamesArr = [country];
  } else if (country.length === shortestCountryName.length) {
    shortestCountryNamesArr.push(country);
  }
}
console.log({ shortestCountryNamesArr });

// That's All for Part 2😊

/* What countries use one vowel in their name (the vowel can be used multiple times)? */
const countriesWithMultiVowels = [];
const countriesWithASingleVowel = [];
const vowelsToCheckForInCountryName = ["A", "E", "I", "O", "U", "Y"];

for (const country of countryArr) {
  if (country.includes("A" || "E" || "I" || "O" || "U")) {
    countriesWithMultiVowels.push(country);
  }
  let has1Vowel = true;
  let isFirstVowelFound = null;

  for (const letter of country) {
    if (vowelsToCheckForInCountryName.includes(letter)) {
      if (isFirstVowelFound === null) {
        isFirstVowelFound = letter;
      } else {
        if (isFirstVowelFound !== letter) {
          has1Vowel = false;
        }
      }
    }
  }
  if (has1Vowel) {
    countriesWithASingleVowel.push(country);
  }
}
console.log({ countriesWithMultiVowels });
console.log({ countriesWithASingleVowel });

/* What country names contain another country name? */
const cNamesWithOneIn = [];
const cNamesInOthers = [];
for (const oCountry of countryArr) {
  for (const iCountry of countryArr) {
    if (oCountry === iCountry) {
      continue;
    } else if (oCountry.includes(iCountry)) {
      cNamesWithOneIn.push(oCountry); // o for outer aka bigger or containing
      cNamesInOthers.push(iCountry); // i for inner aka smaller or inside of
    }
  }
}
console.log({ cNamesWithOneIn }, { cNamesInOthers });

// That's All for Part 4😊
