/*
Get baby names of a specific length from both years of baby names.
*/

const fs = require("fs");
const namesOf1880Strs = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const namesOf1880Arr = namesOf1880Strs.split("\n");

const namesOf2020Strs = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const namesOf2020Arr = namesOf2020Strs.split("\n");

const nameLength = 3;

const names1880ThatMeetLengthCriteria = {};

const names2020ThatMeetLengthCriteria = {};

const commonNamesInBothYears = [];
let commonName = "Name Common to Both Years";

for (let i = 0; i < namesOf1880Arr.length; i++) {
  const name1880 = namesOf1880Arr[i];
  for (let j = 0; j < namesOf2020Arr.length; j++) {
    const name2020 = namesOf2020Arr[j];

    if (name1880.length === nameLength && name2020.length === nameLength) {
      names1880ThatMeetLengthCriteria[name1880] = name1880;
      names2020ThatMeetLengthCriteria[name2020] = name2020;
    }

    if (name1880 === name2020) {
      commonNamesInBothYears.push(name1880);
    }
  }
}

console.log({ names1880ThatMeetLengthCriteria });
console.log({ names2020ThatMeetLengthCriteria });
console.log(commonName, { commonNamesInBothYears });
