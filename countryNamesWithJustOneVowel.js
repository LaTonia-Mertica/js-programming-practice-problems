// file system
const fs = require("fs");
const countryStrings = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArray = countryStrings.split("\n");

// store aka track country names with any vowels
const thoseWithAnyVowels = [];
// store aka track country names with one only vowel
const thoseWithJustOneVowel = [];
// store aka track country names with one vowel
const vowels = ["A", "E", "I", "O", "U", "Y"];

// for loop for each country in array
for (const country of countryArray) {
  // check if country has any vowels
  if (country.includes("A" || "E" || "I" || "O" || "U" || "Y")) {
    // store country names that have any vowels
    thoseWithAnyVowels.push(country);
  }
  // variable for one vowel in country name is true
  let hasOneVowel = true;
  // variable for first/only vowel assigned to null
  let firstVowel = null;

  // for loop for letters of each country name
  for (const letter of country) {
    // check if vowels has letter
    // and when the vowels do contain the letter from the country name
    if (vowels.includes(letter)) {
      // and when the first letter is still null aka intentionally undefined
      if (firstVowel === null) {
        // re-assign the first vowel variable to the current letter
        firstVowel = letter;
        // otherwise
      } else {
        // check if value for variable for first/only vowel is same as the current letter
        // and when the first vowel value is not the same as the current letter
        if (firstVowel !== letter) {
          // re-assign the variable for a single vowel to false
          hasOneVowel = false;
        }
      }
    }
  }
  // if/when it is true there is only one vowel
  if (hasOneVowel) {
    // then store the country name
    thoseWithJustOneVowel.push(country);
  }
}
// console log
console.log({ thoseWithJustOneVowel });
