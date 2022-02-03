/*
THE QUESTION: There is at least one country name that contains another country name. Find all of these cases.

SUDO CODE:

COMMENTS:
- method .trim() added to variable assigned to read the file and manipulate the country names from the text file into strings aka variable countriesStr to remove empty lines at the start and end (not the middle) of the file if either is present; this file is known to have an empty last line
*/

const fs = require("fs");
const countriesStr = fs.readFileSync("countries.txt").toString("utf-8").trim();
const countriesArr = countriesStr.toUpperCase().split("\n");

let country_containing_another_countryName = [];
let countryName_inside_another_countryName = [];

for (countryName of countriesArr) {
  // start to build out code
}

console.log(
  "COUNTRY NAME INSIDE ANOTHER COUNTRY NAME: ",
  countryName_inside_another_countryName
);
console.log(
  "COUNTRY CONTAINING ANOTHER COUNTRY NAME: ",
  country_containing_another_countryName
);
console.log(
  "COUNTRY " +
    country_containing_another_countryName +
    " CONTAINS THE COUNTRY NAME " +
    countryName_inside_another_countryName
);
