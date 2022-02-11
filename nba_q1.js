/*
QUESTION: Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

PSEUDOCODE
[x] access data in the csv file
[x] split on \r and \n to arrange the data into rows 
[x] split rows on the commas to access individual data points
[] set keys and add values to the keys (extraction) using for in loops
[] read/evaluate data in the object/dict
[] ensure line breaks in csv for file to be properly read
[] create fn that accepts argument fo year
[] ensure fn returns winner of the nba finals that year
[] console.log
*/

const fs = require("fs");
const nbaResultsStr = fs.readFileSync("nba_finals.csv").toString("utf-8");
const nbaResultsArr = nbaResultsStr.split(",");

const nbaOutcomes = (year) => {
  for (string in nbaResultsArr) {
    nbaResultsArr[string] = nbaResultsArr[string].replace("\r\n", "");

    // test replace puts empty space where \r\n was
    // console.log(nbaResultsArr);
  }
  //   console.log("NBA FINALS WINNER: ", player + "," + year);
};
nbaOutcomes();

// test split results of strings
// console.log(nbaResultsStr.split(","));
