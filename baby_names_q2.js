/*
QUESTION: What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

SUDO CODE:
- loop through the array
- store first name as the longest name
- compare next name to the current longest name AND replace current longest name with longer name
- push names with same length as longest name in array for all longest names 
- console log longest name 
- console.log other names of same length as longest name
- invoke function
*/

const fs = require("fs");
const namesStr = fs.readFileSync("baby_names_2020_short.txt").toString("utf-8");
const namesArr = namesStr.toUpperCase().split("\n");

let allLongestNames = [];

const showLongestName = () => {
  let longestName;

  //   - loop through the array
  for (const name of namesArr) {
    // - store first name as the longest name
    if (!longestName || name.length > longestName.length) {
      // - compare next name to the current longest name AND replace current longest name with longer name
      longestName = name;
      allLongestNames = [];
    }
    // - store names same length as longest name
    if (name.length === longestName.length) {
      // - push the actual longest name AND other names of same length
      allLongestNames.push(name);
    }
  }
  // console logs with formatted strings
  console.log("LONGEST BABY NAME:", longestName);
  console.log("BABY NAMES SAME LENGTH AS LONGEST BABY NAME:", allLongestNames);
};

// invoke function
showLongestName();
