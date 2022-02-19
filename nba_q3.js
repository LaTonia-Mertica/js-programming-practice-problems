/*
QUESTION: Which teams have made it to the NBA finals but have never won?

PSEUDOCODE
[] in a loop read teams in loser category
[] in another loop collect/store all winners

HELPFUL HINTS
--- const nbaFinalsResults = { winners: [], loser: []}
--- nbaFinalsResults.loser.push()

[] via loop(s) compare each loser to all/each winner
[] if loser team name does not match any winner team name then save/store
[] return value for output in console log
[] console.log
*/

// require file system to make capability possible for reading file
const fs = require("fs");
// assign value of csv converted to strings to nbaResultsStr variable
const nbaResultsStr = fs.readFileSync("nba_finals.csv").toString("utf-8");
// assign value of nbaResultsStr strings converted into array to nbaResultsArr
const nbaResultsArr = nbaResultsStr.split("\r\n");

// dictionary to track/store the data
let losersDict = {};

const getLosers = () => {
  for (let row of nbaResultsArr) {
    let element = row.split(",");
    let winner = element[1];
    let loser = element[2];
  }
};
