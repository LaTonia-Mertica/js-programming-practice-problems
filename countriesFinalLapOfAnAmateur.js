const { countReset } = require("console");
const fs = require("fs");
const countryStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArr = countryStr.split("\n");

/* What countries have “United” in the name? */
const unitedCountries = [];
for (const country of countryArr) {
  if (country.indexOf("UNITED") !== -1) {
    unitedCountries.push(country);
  }
}
console.log({ unitedCountries });

/* What countries both begin and end with a vowel? */
const vowels = ["A", "E", "I", "O", "U"];
const vowelFirstAndLastLetterCountryNames = [];
for (const country of countryArr) {
  const firstLetter = country.charAt(0);
  const lastLetter = country[country.length - 1];
  if (vowels.includes(firstLetter) && vowels.includes(lastLetter)) {
    vowelFirstAndLastLetterCountryNames.push(country);
  }
}
console.log({ vowelFirstAndLastLetterCountryNames });

/* What country names are > 50% vowels? */
const vowelList = ["A", "E", "I", "O", "U"];
let vowelCount = 0;
const invalidChars = [" ", ".", ",", "-", "(", ")", "'", "′"];
let invalidCharsCount = 0;
const over50PercentVowelsCountryNames = [];
for (const country of countryArr) {
  const countryNameMinusInvalids = country.length - invalidChars;
  for (const letter of country) {
    if (vowelList.includes(letter)) {
      vowelCount++;
    } else if (invalidChars.includes(letter)) {
      invalidCharsCount++;
    }
    if (vowelCount / countryNameMinusInvalids > 0.5) {
      over50PercentVowelsCountryNames.push(country);
    }
  }
}
console.log({ over50PercentVowelsCountryNames });

/* What is the shortest country name - and all shortest when handle ties? */
let shortestCountryName;
let allShortestCountryNames = [];
for (const country of countryArr) {
  if (!shortestCountryName || country.length < shortestCountryName.length) {
    shortestCountryName = country;
    allShortestCountryNames = [country];
  } else if (country.length === shortestCountryName.length) {
    allShortestCountryNames.push(country);
  }
}
console.log({ shortestCountryName });
console.log({ allShortestCountryNames });

/* What countries use only one of the 5 vowels in their name? */
const multiVowelCountryNames = [];
const singleVowelCountryNames = [];
const vowelSet = ["A", "E", "I", "O", "U", "Y"];
for (const country of countryArr) {
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
  let hasOneVowel = true;
  let firstVowel = null;
  for (const letter of country) {
    if (vowelSet.includes(letter)) {
      if (firstVowel === null) {
        firstVowel = letter;
      } else if (letter !== firstVowel) {
        hasOneVowel = false;
      }
    }
  }
  if (hasOneVowel) {
    singleVowelCountryNames.push(country);
  }
}
console.log({ singleVowelCountryNames });

/* What country names contain another country name? */
const bigCountryNames = [];
const smCountryNames = [];
for (const bigCountry of countryArr) {
  for (const smCountry of countryArr) {
    if (bigCountry === smCountry) {
      break;
    } else if (bigCountry.includes(smCountry)) {
      bigCountryNames.push(bigCountry);
      smCountryNames.push(smCountry);
    }
  }
}
console.log({ smCountryNames });
console.log({ bigCountryNames });
