// set up to read text file with data
const fs = require("fs");
const countries = fs.readFileSync("./countries.txt").toString("utf-8");
const countriesByLine = countries.split("\n");

const readlines = () => {
  let begin_end_vowel = [];
  // concise way to check for vowels in word
  let vowels = ["A", "E", "I", "O", "U", "Y"];

  for (const country of countriesByLine) {
    // uppercase to avoid case issues
    // look at first character/letter
    // then look at the last character/letter
    let starting_letter = country.toUpperCase().charAt(0);
    let ending_letter = country.toUpperCase().charAt(country.length - 1);

    // when both criteria met
    if (
      vowels.indexOf(starting_letter) > -1 &&
      vowels.indexOf(ending_letter) > -1
    ) {
      // add word to array
      begin_end_vowel.push(country);
    }
    console.log(country);
    console.log(starting_letter);
    console.log(ending_letter);
    // console.log(vowels.indexOf(country.charAt(0)));
  }
  console.log(begin_end_vowel);
};

readlines();
