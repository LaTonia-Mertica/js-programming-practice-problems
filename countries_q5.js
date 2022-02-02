const fs = require("fs");
const countriesStr = fs.readFileSync("countries.txt").toString("utf-8");
const countriesArr = countriesStr.toUpperCase().split("\n");

// variable words_with_one_vowel is assigned the value of an empty array into which country names that meet the criteria can be stored and later outputted
let words_with_one_vowel = [];
// initializes variable initial_vowel as having a value that is empty aka undefined so that variable initial_vowel is declared with a specific value of no information
let initial_vowel = null;
// variable vowels assigned to array of each vowel provides an efficient way to store and compare vowels to characters/letters in each country name
let vowels = ["A", "E", "I", "O", "U"];

for (countryName of countriesArr) {
  for (letter of countryName) {
    if (vowels.includes(letter)) {
    }
  }
  console.log(words_with_one_vowel);
}

// loop over country names outer loop
// loop over each country name character by character inner loop
// check for presence of vowel character by character in inner loop
// when loop assesses character to be a vowel store that character value as the first vowel in inner loop
// when loop assesses a next character anywhere in the country name to be a vowel compare the value of that character with the value of the first vowel
// if all next characters assessed to be vowels equal the initial vowel store the country name per the outer loop
// if at least one next character is assessed to be a vowel different from the initial vowel skip checking the rest of any characters in that country name
// console.log country names with one vowel
