const fs = require("fs");
const countryStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const countryArr = countryStr.split("\n");

const countryHasMultiVowels = [];
const countryHasSingleVowel = [];
const vowels = ["A", "E", "I", "O", "U", "Y"];

// check for country that have vowels
// check for first vowel
// check if first vowel equals following vowel

for (const country of countryArr) {
  let firstVowel = undefined;
  let hasOneVowel = false;

  for (const letter of country) {
    if (vowels.includes(letter)) {
      if (!firstVowel) {
        firstVowel = letter;
        hasOneVowel = true;
      } else if (letter !== firstVowel) {
        hasOneVowel = false;
        continue;
      }
    }
  }

  if (hasOneVowel) {
    countryHasSingleVowel.push(country);
  }
}
console.log({ countryHasSingleVowel });
