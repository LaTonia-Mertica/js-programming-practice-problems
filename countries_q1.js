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
  // set tracker
  let united_names = [];
  // loop/iterate through words
  for (const word of countriesByLine) {
    // look for word 'united'
    if (word.includes("United")) {
      // when word includes 'united' add word to array
      united_names.push(word);
    }
  }
  console.log("Countries with names that include 'United':", united_names);
  // console.log(countriesByLine);
};

readlines();
