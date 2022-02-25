/*
QUESTION: Which teams have made it to the NBA finals but have never won?

PSEUDOCODE
[x] use for of loop to read rows in array
[x] declare element and assign value as each row split on the commas
[x] declare winner and assign value to winner team name(s)
[x] declare non winners and assign value to loser team name(s)
[x] push each winner to dict at the winners array
[x] push each non winner to dict at the non winners array
[x] in another for of loop separate and on same level as first for of 
loop to iterate by team through non winners in the dict
[x] if statement inside 2nd for of loop to check whether teams in the
winners array include each team being iterated over
[x] when winners array contains non winner team name skip that team/do not include that team
[x] otherwise push team name into new real state for expected/sought output
[x] outside of any loop, console log that new real estate that now contains the teams that never won even though they've playe at the nba finals

HELPFUL HINTS
--- const nbaFinalsResults = { winners: [], loser: []}
--- nbaFinalsResults.loser.push()

*/

// require file system to make capability possible for reading file
const fs = require("fs");
// assign value of csv converted to strings to nbaResultsStr variable
const nbaResultsStr = fs.readFileSync("nba_finals.csv").toString("utf-8");
// assign value of nbaResultsStr strings converted into array to nbaResultsArr
const nbaResultsArr = nbaResultsStr.split("\r\n");

// dictionary to track/store the data
let nbaFinalsResults = { winners: [], nonWinners: [] };
let newTeamsArr = [];

for (let row of nbaResultsArr) {
  let element = row.split(",");
  let winner = element[1];
  let nonWinner = element[2];
  nbaFinalsResults["winners"].push(winner);
  nbaFinalsResults["nonWinners"].push(nonWinner);
}
for (let team of nbaFinalsResults["nonWinners"]) {
  if (nbaFinalsResults["winners"].includes(team)) {
    continue;
  } else {
    newTeamsArr.push(team);
  }
}
console.log(newTeamsArr);
