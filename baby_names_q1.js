/*
THE QUESTION: What is the shortest baby name in the top 40 baby names for 2020?

SUDO CODE:
- loop through baby names array
- use first baby name loop comes to as shortest baby name
- compare each baby name to current shortest baby name AND replace shortest baby name with baby name that is shorter than it currently is 
- store subsequent shortest baby name(s) in variable shortestBabyName as loop continues
- console.log
- run/invoke function

COMMENTS:
- method .trim() added (to variable assigned to read the file and manipulate data into strings) to remove empty lines at the start and end (not the middle) of the file if either is present
*/

const fs = require("fs");
const namesStr = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  // remove empty lines from front/end of data source
  .trim();
const namesArr = namesStr.toUpperCase().split("\n");

const showShortestBabyName = () => {
  let shortestBabyName;

  for (const name of namesArr) {
    // when no value assigned to shortest
    // baby name variable OR length of name
    // is less than length of name shortest name
    // assign value of that name to shotest name
    if (!shortestBabyName || name.length < shortestBabyName.length) {
      shortestBabyName = name;
    }
  }
  console.log("SHORTEST BABY NAME OF 2020:", shortestBabyName);
};

showShortestBabyName();
