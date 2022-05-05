/*
[] Find the song that was number 1 the most weeks and include the artist and number of weeks
*/

const fs = require("fs");
const billboardStrings = fs
  .readFileSync("billboard100_2000.csv")
  .toString("utf-8");
const billboardArray = billboardStrings.split("\n");

const mostWeeksOnBoardDict = {};
let mostWeeks = 0;
let numOneSong = "";

for (const row of billboardArray) {
  const element = row.split(",");
  const rank = element[0];
  const song = element[1];
  const artist = element[2];
  const weeksOnBoard = element[5];
  const date = element[6];

  if (rank !== "1" && !date.includes("2000-")) {
    continue;
  } else {
    if (mostWeeksOnBoardDict[song] === undefined) {
      mostWeeksOnBoardDict[song] = 0;
    }
    mostWeeksOnBoardDict[song]++;
    if (mostWeeksOnBoardDict[song] > mostWeeks) {
      mostWeeks = weeksOnBoard;
      mostWeeks = mostWeeksOnBoardDict[song];
      numOneSong =
        song +
        " by " +
        artist +
        " was #1 song for " +
        mostWeeks +
        " weeks - the most in year 2000.";
    }
  }
}
console.log("\n");
console.log({ numOneSong });
console.log("\n");
