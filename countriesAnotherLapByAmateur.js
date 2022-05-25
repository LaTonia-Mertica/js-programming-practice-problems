// arrange file system to read and access data provided in txt file
const fs = require("fs");
const countryStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArr = countryStr.split("\n");

/* What countries have “United” in the name? */
function getCountryNamesContainingUnited() {
  const unitedCountryNames = [];
  for (const country of countryArr) {
    if (country.includes("UNITED")) {
      unitedCountryNames.push(country);
    }
  }
  return unitedCountryNames;
}
console.log(getCountryNamesContainingUnited());

/* What countries both begin and end with a vowel? */
function getVowelBeginAndEndCountryNames() {
  const vowels = ["A", "E", "I", "O", "U"];
  const vowelBeginAndEndCountryNames = [];
  for (const country of countryArr) {
    const startLetter = country.charAt(0);
    const endLetter = country[country.length - 1];
    if (vowels.includes(startLetter) && vowels.includes(endLetter)) {
      vowelBeginAndEndCountryNames.push(country);
    }
  }
  return vowelBeginAndEndCountryNames;
}
console.log(getVowelBeginAndEndCountryNames());

/* What country names are > 50% vowels? */
// need to account for characters that are not letters
function getCountryNamesOver50PercentVowels() {
  const vowels = ["A", "E", "I", "O", "U"];
  const invalidChars = [" ", ".", ",", "-", "(", ")", "'", "′"];
  const countryNamesOver50PercentVowels = [];
  for (const country of countryArr) {
    let vowelCount = 0;
    let invalidCharsCount = 0;
    const countryNameLengthMinusInvalidChars =
      country.length - invalidCharsCount;
    for (const letter of country) {
      if (vowels.includes(letter)) {
        vowelCount++;
      } else if (invalidChars.includes(letter)) {
        invalidCharsCount++;
      }
    }
    if (vowelCount / countryNameLengthMinusInvalidChars > 0.5) {
      countryNamesOver50PercentVowels.push(country);
    }
  }
  return countryNamesOver50PercentVowels;
}
console.log(getCountryNamesOver50PercentVowels());

/* What is the shortest country name - and all shortest when handle ties? */
function getAllShortestCountryNames() {
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
  return allShortestCountryNames;
}
console.log(getAllShortestCountryNames());

/* What countries use one vowel in their name (the vowel can be used multiple times)? */
function getSingleVowelCountryNames() {
  const multiVowelCountryNames = [];
  const singleVowelCountryNames = [];
  const vowels = ["A", "E", "I", "O", "U", "Y"];
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
      if (vowels.includes(letter)) {
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
  return singleVowelCountryNames;
}
console.log(getSingleVowelCountryNames());

/* What country names contain another country name? */
function getCountryNamesThatContainAnotherCountryName() {
  const countryNamesInsideOthers = [];
  const countryNamesContainingOthers = [];
  for (const bigCountry of countryArr) {
    for (const tinyCountry of countryArr) {
      if (bigCountry === tinyCountry) {
        break;
      } else if (bigCountry.includes(tinyCountry)) {
        countryNamesInsideOthers.push(tinyCountry);
        countryNamesContainingOthers.push(bigCountry);
      }
    }
  }
  return (
    "\nCOUNTRY NAMES IN OTHER COUNTRY NAMES: " +
    countryNamesInsideOthers +
    "\nCOUNTRY NAMES CONTAINING OTHER COUNTRY NAMES: " +
    countryNamesContainingOthers
  );
}
console.log(getCountryNamesThatContainAnotherCountryName());

// that's all for this set for now ... good work!!!
