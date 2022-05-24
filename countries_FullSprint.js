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
  // other options: indexOf, includes
  if (country.match("UNITED")) {
    unitedCountries.push(country);
  }
}
console.log({ unitedCountries });

/* What countries both begin and end with a vowel? */
const vowelBeginEndCountries = [];
const vowels = ["A", "E", "I", "O", "U", "Y"];

for (let i = 0; i < countryArr.length; i++) {
  const country = countryArr[i];
  const startLetter = country.toUpperCase().charAt(0);
  const endLetter = country.toUpperCase().charAt(country.length - 1);

  // other options: > -1 for comparison
  if (vowels.indexOf(startLetter) !== -1 && vowels.indexOf(endLetter) !== -1) {
    vowelBeginEndCountries.push(country);
  }
}
console.log({ vowelBeginEndCountries });

/* What country names are > 50% vowels? */
const vowelLetters = ["A", "E", "I", "O", "U", "Y"];
const invalidChars = [" ", ".", "-", "'", "(", ")", "’"];
const countryNamesOver50PercentVowels = [];

for (const country of countryArr) {
  let vowelCount = 0;
  let invalidCharCount = 0;
  let validCountryLength = country.length - invalidCharCount;

  for (const letter of country) {
    if (vowelLetters.includes(letter)) {
      vowelCount++;
    } else if (invalidChars.includes(letter)) {
      invalidCharCount++;
    }
  }

  if (vowelCount / validCountryLength > 0.5) {
    countryNamesOver50PercentVowels.push(country);
  }
}
console.log({ countryNamesOver50PercentVowels });

/* What is the shortest country name - ensure to handle ties? */
let shortestCountryName;
let shortestOfCountryNames = [];

for (const country of countryArr) {
  if (!shortestCountryName || country.length < shortestCountryName.length) {
    shortestCountryName = country;
    shortestOfCountryNames = [country];
  } else if (country.length === shortestCountryName.length) {
    shortestOfCountryNames.push(country);
  }
}
console.log({ shortestOfCountryNames });

/* What countries use one vowel in their name (the vowel can be used multiple times)? */
const multiVowelCountryNames = [];
const oneVowelCountryNames = [];

const vowelList = ["A", "E", "I", "O", "U"];

for (const country of countryArr) {
  if (country.includes("A" || "E" || "I" || "O" || "U")) {
    multiVowelCountryNames.push(country);

    let hasOneVowel = true;
    let firstVowel = null;

    for (const letter of country) {
      if (vowelList.includes(letter)) {
        if (firstVowel === null) {
          firstVowel = letter;
        } else {
          if (firstVowel !== letter) {
            hasOneVowel = false;
          }
        }
      }
    }
    if (hasOneVowel) {
      oneVowelCountryNames.push(country);
    }
  }
}
console.log({ oneVowelCountryNames });

/* What country names contain another country name? */
const countryNameInAnotherCountryName = [];
const countryNameContainingAnotherCountryName = [];

for (const countryWith of countryArr) {
  for (const countryIn of countryArr) {
    if (countryWith === countryIn) {
      continue;
    }
    if (countryWith.includes(countryIn)) {
      countryNameInAnotherCountryName.push(countryIn);
      countryNameContainingAnotherCountryName.push(countryWith);
    }
  }
}
console.log(
  { countryNameInAnotherCountryName },
  { countryNameContainingAnotherCountryName }
);
