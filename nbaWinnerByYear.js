/*
Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
*/
const fs = require("fs");
const nbaResultsStr = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nbaResultsArr = nbaResultsStr.split("\r\n");

const dataSet = {};
for (const row of nbaResultsArr) {
  const element = row.split(",");
  const year = element[0];
  const winner = element[1];
  const loser = element[2];
  const score = element[3];
  const mvp = element[4];

  dataSet[year] = { winner, mvp, loser, score };
}

function getNbaWinnerByYear(yr) {
  if (dataSet[yr] === undefined) {
    return "No Entry!";
  }
  return dataSet[yr];
}
console.log(getNbaWinnerByYear(2005));
