/*
[] Print out a ranking of who has won the MVP more than once, by times won. ie. output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
 */

const fs = require("fs");
const nbaFinalsArray = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");

// store all mvps
const anyMvpObj = {};
// store mvps over 1
const onlyMultiMvpObj = {};

// for loop
// in for loop assign value to key mvp in obj for all mvps
// to tidy a bit can ignore empty strings and literal MVP name for value of mvps
for (const row of nbaFinalsArray) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "" || mvp === "MVP") {
    continue;
  }

  if (!(mvp in anyMvpObj)) {
    anyMvpObj[mvp] = 1;
  } else {
    anyMvpObj[mvp]++;
  }
}

// leave the previous for loop for new for loop
// use const to create key and value from object entries on the obj for all mvps
// skip values of number 1
// otherwise set the value of the key to the value
for (const [key, value] of Object.entries(anyMvpObj)) {
  if (value === 1) {
    continue;
  } else {
    onlyMultiMvpObj[key] = value;
  }
}

// leave the second for loop to a third for loop
// create obj to store final output and put obj over third for loop
// skip mvp values that equal one
// check if the final output obj does not have the value of mvps earned
// assign the value of mvps earned to an empty array
// push in each mvp whose value is that of the mvps earned
const mvpByMvpsEarnedObj = {};
for (const [mvp, mvpsEarned] of Object.entries(anyMvpObj)) {
  if (mvpsEarned === 1) {
    continue;
  }
  if (!(mvpsEarned in mvpByMvpsEarnedObj)) {
    mvpByMvpsEarnedObj[mvpsEarned] = [];
  }
  mvpByMvpsEarnedObj[mvpsEarned].push(mvp);
}

// sort
const mvpsSorted = Object.entries(mvpByMvpsEarnedObj).sort().reverse();
// console log
console.log(mvpsSorted);
