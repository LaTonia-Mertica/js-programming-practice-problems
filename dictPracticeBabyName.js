/*
[ ] There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.
    [ ] Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?
*/
const fs = require("fs");
const nameStr = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nameArr = nameStr.split("\n");
const wordStr = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const wordArr = wordStr.split("\n");

// data set accessed via dict
const obj = {};
const result = [];

for (const word of wordArr) {
  obj[word] = "";
}
for (const name2020 of nameArr) {
  const name2020InReverse = name2020.split("").reverse().join("");
  if (name2020InReverse in obj) {
    result.push(name2020InReverse);
  }
}
console.log({ result });
