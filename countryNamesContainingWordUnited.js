/*
[] Get country names that contain the word "united"
*/

// file system
const fs = require("fs");
const countryStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase();
const countryArr = countryStr.split("\n");

const countryNamesWithUnited = [];

const getCountryNamesContainingUnited = () => {
  for (const country of countryArr) {
    if (country === "") {
      continue;
    } else if (country.includes("UNITED")) {
      countryNamesWithUnited.push(country);
    }
  }
  // console log works the same from within the function
  console.log({ countryNamesWithUnited });
};
// below line of code invokes the function
getCountryNamesContainingUnited();

// this works because I used the same letter case - Sentence case
// this did not work because the case is now upper for the countries but I have sentence case in the includes method
// the empty string keeps showing because it is not meeting criteria to console log AND if it did meet criteria to console log it would not because the code continues when it gets to empty strings
