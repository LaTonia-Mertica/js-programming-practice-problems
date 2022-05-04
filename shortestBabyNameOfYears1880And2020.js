/*
[x] find the shortest baby name of years 1880 and 2020
*/

// this can be used with every other element of file system
const fs = require("fs");

// this is specific to this year - 1880
const names1880Strings = fs
  .readFileSync("baby_names_1880_short.txt")
  .toString("utf-8")
  .trim()
  .toUpperCase();
const names1880Array = names1880Strings.split("\n");

// this is specific to this year - 2020
const names2020Strings = fs
  .readFileSync("baby_names_2020_short.txt")
  .toString("utf-8")
  .trim()
  .toUpperCase();
const names2020Array = names2020Strings.split("\n");

let shortest1880Name;
let shortest2020Name;

for (let i = 0; i < names1880Array.length; i++) {
  const name1880 = names1880Array[i];
  // if this name variable is undefined
  // OR if it is defined but the length is greater than a name being iterated through the loop
  // must compare length to length
  if (!shortest1880Name || name1880.length < shortest1880Name.length) {
    shortest1880Name = name1880;
  }
}
console.log({ shortest1880Name });

// because these elements are scoped to their own for loops the same element names such as letter i can be used
for (let i = 0; i < names2020Array.length; i++) {
  const name2020 = names2020Array[i];
  if (!shortest2020Name || name2020.length < shortest2020Name.length) {
    shortest2020Name = name2020;
  }
}
console.log({ shortest2020Name });
