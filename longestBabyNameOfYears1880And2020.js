/*
[] Get the longest baby names of both years data is provided for - 1880 and 2020 - and handle ties in length
*/

const fs = require("fs");
const nameStrings1880 = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nameArray1880 = nameStrings1880.split("\n");

const nameStrings2020 = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nameArray2020 = nameStrings2020.split("\n");

let allLongestNames1880;
let longestName1880;
let allLongestNames2020;
let longestName2020;

const showLongest1880Name = () => {
  for (const name of nameArray1880) {
    if (!longestName1880 || name.length > longestName1880.length) {
      longestName1880 = name;
      allLongestNames1880 = [];
    }
    if (name.length === longestName1880.length) {
      allLongestNames1880.push(name);
    }
  }
  console.log("\n");
  console.log({ longestName1880 });
  console.log({ allLongestNames1880 });
  console.log("\n");
};
showLongest1880Name();

const showLongest2020Name = () => {
  for (const name of nameArray2020) {
    if (!longestName2020 || name.length > longestName2020.length) {
      longestName2020 = name;
      allLongestNames2020 = [];
    }
    if (name.length === longestName2020.length) {
      allLongestNames2020.push(name);
    }
  }
  console.log("\n");
  console.log({ longestName2020 });
  console.log({ allLongestNames2020 });
  console.log("\n");
};
showLongest2020Name();
