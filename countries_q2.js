const fs = require("fs");
const countries = fs.readFileSync("./countries.txt").toString("utf-8");
const countriesByLine = countries.split("\n");

const readlines = () => {
  let begin_end_vowel = [];
  let vowels = ["A", "E", "I", "O", "U", "Y"];

  for (const country of countriesByLine) {
    let starting_letter = country.toUpperCase().charAt(0);
    let ending_letter = country.toUpperCase().charAt(country.length - 1);

    if (
      vowels.indexOf(starting_letter) > -1 &&
      vowels.indexOf(ending_letter) > -1
    ) {
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
