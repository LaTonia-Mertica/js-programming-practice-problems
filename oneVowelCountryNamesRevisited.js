/* What countries use one vowel in their name (the vowel can be used multiple times)? */

// file system to access and read data from provided data source
const fs = require("fs");
const countryStrs = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArr = countryStrs.split("\n");

// storage of vowels
// letter y is technically not considered a vowel
// though it is a vowel sometimes
const vowels = ["A", "E", "I", "O", "U", "Y"];
// storage for multi vowel names
const multiVowelCountryNames = [];
// storage for single vowel names
const singleVowelCountryNames = [];

// outer for loop
for (const country of countryArr) {
  // check if country name has any vowels
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
  // assigned boolean value
  // set to true because it is not true at this time
  let hasOneVowel = true;
  // tracker for first vowel
  let firstVowel = null;
  // inner for loop
  for (const letter of country) {
    // check if letter is a vowel
    if (vowels.includes(letter)) {
      // check if first vowel still null
      if (firstVowel === null) {
        // re-assign first vowel to letter if letter is a vowel
        firstVowel = letter;
        // check for letters not same as first vowel
      } else if (letter !== firstVowel) {
        // re-assign has one vowel variable to false
        hasOneVowel = false;
      }
    }
  }
  // check for when has one vowel is true
  if (hasOneVowel) {
    // storage
    singleVowelCountryNames.push(country);
  }
}
console.log({ singleVowelCountryNames });

// very well done!!!
