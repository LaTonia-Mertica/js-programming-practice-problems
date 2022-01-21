// const fs = require("fs");
// const countries = fs.readFileSync("countries.txt").toString("utf-8");
// // const readline = require("readline");
// // const readliner = readline.createInterface({
// //   input: fs.createReadStream("countries.txt"),
// // });

const fs = require("fs");
const countries = fs.readFileSync("./countries.txt").toString("utf-8");
const countriesByLine = countries.split("\n");

const readlines = () => {
  let united_names = [];
  for (const word of countriesByLine) {
    if (word.includes("United")) {
      united_names.push(word);
    }
  }
  console.log("Countries with names that include 'United':", united_names);
  // console.log(countriesByLine);
};

readlines();
