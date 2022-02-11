/*
QUESTION: What are all of the names that were top 40 baby names in both 1880 and 2020?

PSEUDOCODE:
- setup file systen for each file
- create main function
- variable assigned to array to track/store names that meet criteria
- loop through each name in one file (outer loop)
- loop through names in other file (inner loop)
- check to see if a name exists in both files
---- by comparing each name of each file as a comparison between strings - meaning a boolean for direct comparison between names
- track/store each name that appears in both files
- push to storage
- console log
*/

const fs = require("fs");
const names2020Str = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8");
const names2020Arr = names2020Str.toUpperCase().split("\n");

const names1880Str = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8");
const names1880Arr = names1880Str.toUpperCase().split("\n");

const namesThatMatch = () => {
  let namesInBothYears = [];

  for (let names2020 of names2020Arr) {
    for (let names1880 of names1880Arr) {
      // names 2020 is equal to Liam
      // names 1880 is equal to liam
      if (names2020 === names1880) {
        namesInBothYears.push(names2020);
      }
    }
  }
  console.log("NAMES IN BOTH YEARS: ", namesInBothYears);
};
namesThatMatch();
