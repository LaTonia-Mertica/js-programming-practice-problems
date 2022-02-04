/*
THE QUESTION: There is at least one country name that contains another country name. Find all of these cases.

SUDO CODE:
- loop through list of country names
- loop through list of country names again
- check if complete country name from one loop is contained in country name in other loop
- check if country name from one loop is same as country name from other loop AND if they are the same then skip to comparison of next country name
- store in respective arrays the names of countries that are those with other country names in them and those that are country names in other countries' names
- console.log

COMMENTS:
- method .trim() added to variable assigned to read the file and manipulate the country names from the text file into strings aka variable countriesStr to remove empty lines at the start and end (not the middle) of the file if either is present; this file is known to have an empty last line
*/

const fs = require("fs");
const countriesStr = fs.readFileSync("countries.txt").toString("utf-8").trim();
const countriesArr = countriesStr.toUpperCase().split("\n");
// small array for testing
// const countriesArray = ["Johnsontown", "Johnson"];

let countryContainingAnotherCountryName = [];
let countryNameInsideAnotherCountryName = [];

for (bigCountryName of countriesArr) {
  // console.log("BIG COUNTRY NAMES:", bigCountryName);
  for (tinyCountryName of countriesArr) {
    if (bigCountryName === tinyCountryName) {
      continue;
    }
    // console.log("TINY COUNTRY NAMES:", tinyCountryName);

    if (bigCountryName.includes(tinyCountryName)) {
      countryNameInsideAnotherCountryName.push(tinyCountryName);
      countryContainingAnotherCountryName.push(bigCountryName);
    }
  }
}

console.log(
  "COUNTRY NAME INSIDE ANOTHER COUNTRY NAME: ",
  countryNameInsideAnotherCountryName
);
console.log(
  "COUNTRY CONTAINING ANOTHER COUNTRY NAME: ",
  countryContainingAnotherCountryName
);
console.log(
  "COUNTRY: " + countryContainingAnotherCountryName[3],
  "\nCONTAINS THE COUNTRY NAME: " + countryNameInsideAnotherCountryName[3]
);
