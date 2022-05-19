/* What country names are > 50% vowels? */
// solution that accounts for non-letters aka invalid characters

const fs = require("fs");
const countryStrings = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArray = countryStrings.split("\n");
console.log({ countryArray });

// store country names that meet criteria
// have a list aka array of vowels/letters to compare
// have a list aka array of non letters/invalid characters to compare

const countryNamesAtLeast50PercentVowels = [];
const vowels = ["A", "E", "I", "O", "U"];
// we can add letter y if choose though not considered a vowel
const invalidCharx = [" ", ".", "-", "'", "(", ")", "′"];

// for loop
for (const country of countryArray) {
  // counter for vowels
  // counter for non vowels
  // new/actual length of country name with only letters
  let vowelCounter = 0;
  let nonVowelCounter = 0;
  const newCountryNameLength = country.length - nonVowelCounter;

  // inner for loop to access letters
  for (const letter of country) {
    // count vowels
    if (vowels.includes(letter)) {
      vowelCounter++;
      // count non vowels
    } else if (invalidCharx.includes(letter)) {
      nonVowelCounter++;
    }

    // check ratio of vowels to non vowels
    if (vowelCounter / newCountryNameLength > 0.5) {
      countryNamesAtLeast50PercentVowels.push(country);
    }
  }
}
console.log({ countryNamesAtLeast50PercentVowels });
