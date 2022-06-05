/*
Which teams have made it to the NBA finals but have never won?
*/
const fs = require("fs");
const wordArr = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");

// object to track both sets of teams
// with winners and not winners as keys
// each key with a value of empty array
const teamsObj = {
  winners: [],
  hopefuls: [],
};
// object to store output of teams that never won
const neverWonsObj = {};

// for loop to access each element of each row
// and to populate the array values for each key in the object
for (const row of wordArr) {
  const element = row.split(",");
  const winner = element[1];
  let hopeful = element[2];

  if (winner === "WINNER" || hopeful === "LOSER") {
    continue;
  }

  teamsObj.winners.push(winner);
  teamsObj.hopefuls.push(hopeful);
}

// separate for loop to iterate through array of not winners
// and check if the array of winners includes any not winners
// then skip over when not winner found in winners array
// otherwise set the team as a key on the object
// ensure to assign a value to the team key(s), which can be anything
for (const team of teamsObj.hopefuls) {
  if (teamsObj.winners.includes(team)) {
    continue;
  } else {
    neverWonsObj[team] = "💥";
  }
}
// console log
console.log({ neverWonsObj });

// fn method
// const fs = require("fs");
const arrayOfResults = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");

const winnersAndLosersObj = {
  winners: [],
  losers: [],
};

for (const row of arrayOfResults) {
  const element = row.split(",");
  const winner = element[1];
  const loser = element[2];

  winnersAndLosersObj["winners"].push(winner);
  winnersAndLosersObj["losers"].push(loser);
}

function getTeamsThatNeverWon() {
  const resultObj = {};
  for (const team of winnersAndLosersObj["losers"]) {
    if (winnersAndLosersObj["winners"].includes(team)) {
      continue;
    } else {
      resultObj[team] = "😜";
    }
  }
  return resultObj;
}
console.log(getTeamsThatNeverWon());
