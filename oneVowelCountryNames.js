/* What countries use one vowel in their name (the vowel can be used multiple times)? */
const fs = require("fs");
const countryStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArr = countryStr.split("\n");

const vowels = ["A", "E", "I", "O", "U"];
const multiVowelCountryNames = [];
const oneVowelCountryNames = [];

// outer loop to access each country
for (const country of countryArr) {
  // check for country names with any vowels
  if (
    country.includes("A") ||
    country.includes("E") ||
    country.includes("I") ||
    country.includes("O") ||
    country.includes("U")
  ) {
    // storage
    multiVowelCountryNames.push(country);
  }
  // set tracker to true knowing it is currently false
  let hasOneVowel = true;
  // set first found vowel to undefined
  let firstVowel = null;
  // inner loop to access each letter in each country
  for (const letter of country) {
    // check if letter is a vowel
    if (vowels.includes(letter)) {
      // check if first vowel variable is still undefined
      if (firstVowel === null) {
        // re-assign first vowel to letter
        firstVowel = letter;
        // if letter not same as first vowel
      } else if (letter !== firstVowel) {
        // set has one vowel to false
        hasOneVowel = false;
      }
    }
  }
  // if statement outside inner loop though inside outer loop
  // when has one vowel is true
  if (hasOneVowel) {
    // storage
    oneVowelCountryNames.push(country);
  }
}
console.log({ oneVowelCountryNames });
