const fs = require("fs");
const countriesStr = fs.readFileSync("countries.txt").toString("utf-8");
const countriesArr = countriesStr.toUpperCase().split("\n");
// console.log(countriesArr);

// test cases per next three lines below rather than re-running full code
// const countriesArr = ["NOT. 'AM-AU"];
// const countriesArr = ["La'Tonia-Mertica."];
// console.log(countriesArr);

const readlines = () => {
  let vowels = ["A", "E", "I", "O", "U"];
  // testing whether adding 'y' to vowels produces different results, which it does
  // let vowels = ["A", "E", "I", "O", "U", "Y"];
  let over_50percent_vowels_country_names = [];

  //outer loop over full country name
  for (let i = 0; i < countriesArr.length; i++) {
    let vowel_count = 0;
    let invalid_letter_count = 0;
    let countryName = countriesArr[i];

    //inner loop over each letter of each country name
    for (let j = 0; j < countryName.length; j++) {
      let letter = countryName[j];

      //increment per presence of vowels
      if (vowels.includes(letter)) {
        vowel_count++;
      }
      // remove empty space and track it as an invalid letter - essentially defending against the edge case of an empty space being read as a letter
      if (letter === " ") {
        invalid_letter_count++;
      }
      // defending against dot aka period
      if (letter === ".") {
        invalid_letter_count++;
      }
      // defending against dash aka hyphen
      if (letter === "-") {
        invalid_letter_count++;
      }
      // defending against single quote aka apostrophe
      if (letter === "'") {
        invalid_letter_count++;
      }
      // defending against ?smart quote? or reverse backtick??
      if (letter === "’") {
        invalid_letter_count++;
      }
      // defending against first/opening parentheses
      if (letter === "(") {
        invalid_letter_count++;
      }
      // defending against second/closing parentheses
      if (letter === ")") {
        invalid_letter_count++;
      }
    }
    // initial results included invalid elements/characters in the length calculations...console.log directly below stemmed into modification of code for more accurate output of results such as the results not including empty elements/characters read as valid elements/characters (ie. letters; words)
    console.log(
      "COUNTRY NAME LENGTH WITH INVALID ELEMENTS:",
      countryName,
      countryName.length
    );

    // results per defending against invalid characters
    let new_countryname_length = countryName.length - invalid_letter_count;
    console.log(
      "COUNTRY NAME LENGTH MINUS INVALID ELEMENTS:",
      new_countryname_length
    );

    if (vowel_count / new_countryname_length > 0.5) {
      over_50percent_vowels_country_names.push(countryName);
    } // inner loop closed
  } // outer loop closed

  console.log(
    "Country names containing more than 50% vowels:",
    over_50percent_vowels_country_names
  );
};

readlines();

// NEXT SEE WHAT HAPPENS IN RESULGTS WITH "Y" AND TRY TO REMOVE MORE INVALID CHARACTERS BEING READ AS LETTERS (DOT(.); DASH(-); APOSTROPHE(')) ... done Done DONE in most basic aka dumb way (after attempted multiple or/pipe operators in initial)

//check for country names containing vowels
//check length of country names containing vowels
//check if the number of vowels compared to the number of total letters/characters in each country name is more than 50 percent
//store country names that contain more than 50 percent vowels via push into array
//console log country names that contain more than 50 percent vowels
