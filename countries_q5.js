const fs = require("fs");
const countriesStr = fs.readFileSync("countries.txt").toString("utf-8").trim();
const countriesArr = countriesStr.toUpperCase().split("\n");

// variable words_with_one_vowel is assigned the value of an empty array into which country names that meet the criteria can be stored and later outputted ... similar setup for variable words_with_vowels (ie backup checks)
let words_with_vowels = [];
let words_with_one_vowel = [];

// variable initial_vowel below (let initial_vowel = null;) initialized as having a value that is empty aka undefined so that variable initial_vowel is declared with a specific value of no information

// variable vowels assigned to array of each vowel provides an efficient way to store and compare vowels to characters/letters in each country name
let vowels = ["A", "E", "I", "O", "U"];

for (countryName of countriesArr) {
  if (countryName.includes("A" || "E" || "I" || "O" || "U")) {
    words_with_vowels.push(countryName);
  }

  // boolean to test if criteria met by individual country
  let hasOneVowel = true;

  // variable initial_vowel placed here aka locally scoped as reset mechanism to ensure only the first vowel will be checked/tracked (not all subsequent vowels, which happens when this variable is globally scoped)
  let initial_vowel = null;
  // check each letter of the name of the country - not just the vowels, but check for vowels
  for (letter of countryName) {
    if (vowels.includes(letter)) {
      // if value of initial_vowel is empty/undefined when first vowel is encountered set its value to that of the first vowel THEN output result in formatted string ... here value of letter could only be a vowel because it is being tracked against the array of vowels for matches
      if (initial_vowel === null) {
        initial_vowel = letter;
        console.log(countryName + " HAS 1ST VOWEL " + letter);
        // otherwise initial_vowel has a value AND if that value is not the same as that of the current/next vowel THEN mark that country as not having just one vowel in its name
      } else {
        if (initial_vowel !== letter) {
          // stop looking at this country name if the first/initial vowel and the next/subsequent letter (which is also assessed as a vowel) are not the same
          hasOneVowel = false;
        }
      }
    }
  }
  // when boolean hasOneVowel is true THEN add the name of the country into the array for countries with one vowel AND do this in a formatted string
  if (hasOneVowel) {
    words_with_one_vowel.push(
      countryName + " HAS ONLY ONE VOWEL: " + initial_vowel
    );
  }
}
console.log(words_with_vowels);
console.log(words_with_one_vowel);

// SUDO CODE TO OUTLINE NEEDED STEPS FOR SOLUTION
// loop over country names outer loop
// loop over each country name character by character inner loop
// check for presence of vowel character by character in inner loop
// when loop assesses character to be a vowel store that character value as the first vowel in inner loop
// when loop assesses a next character anywhere in the country name to be a vowel compare the value of that character with the value of the first vowel
// if all next characters assessed to be vowels equal the initial vowel store the country name per the outer loop
// if at least one next character is assessed to be a vowel different from the initial vowel skip checking the rest of any characters in that country name
// console.log country names with one vowel
