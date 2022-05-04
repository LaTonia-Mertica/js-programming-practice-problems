/*
[] Find NBA Finals winner by year
*/

// file system to access and read provided data source
const fs = require("fs");
const nbaFinalsStrings = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .trim();
const nbaFinalsArray = nbaFinalsStrings.split("\r\n");

const winningTeam = {};

for (const string of nbaFinalsArray) {
  const team = string.split(",");
  const year = parseInt(team[0]);
  const winner = team[1];

  winningTeam[year] = winner;
}

// this is function used to call/invoke needed info
// this is rather than simply console logging from for loop above
function winnerTeam(year) {
  return winningTeam[year];
}
// returns undefined when no year is passed
console.log("\n2003 WINNER: " + winnerTeam(2003) + "\n");
