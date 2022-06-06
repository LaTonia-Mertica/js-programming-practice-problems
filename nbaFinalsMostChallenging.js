/*
Print out a ranking of who has won the MVP more than once, by times won. ie. output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon

    PSEUDOCODE
    - populate object with mvp players by mvps earned
    - check if non winners are in winners set of teams
    - store teams not in winners set of teams
    - sort multi mvps by mvps earned */

const fs = require("fs");
const nbaArr = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");

// storage for all mvps; multi mvps; sorted multi mvps
const allMvps = {};
const moreThanOneMvpEarners = {};
const playersByMvpsEarned = {};

// for loop to access each element
// skip inconsequential values of mvp
// and to populate storage for all mvps
for (const row of nbaArr) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "" || mvp === "MVP") {
    continue;
  }

  if (!(mvp in allMvps)) {
    allMvps[mvp] = 1;
  } else {
    allMvps[mvp]++;
  }
}

// second for loop to check for values of 1 for mvps
// and skip the values of one
// but set the value for those over number one
for (const [key, value] of Object.entries(allMvps)) {
  if (value === 1) {
    continue;
  } else {
    moreThanOneMvpEarners[key] = value;
  }
}

// third for loop to again check key and value of all mvps object
// skip aka ignore values of one
// then check for when mvps not in the sorted object
// to set value to empty array
// then push each player into the object
for (const [player, mvps] of Object.entries(allMvps)) {
  if (mvps === 1) {
    continue;
  }

  if (!(mvps in playersByMvpsEarned)) {
    playersByMvpsEarned[mvps] = [];
  }
  playersByMvpsEarned[mvps].push(player);
}

// variable to store the mvps sorted
const mvpListSorted = Object.keys(playersByMvpsEarned).sort().reverse();

// fourth and final for loop to iterate the sorted object
// and console log the mvps and players by mvps earned as a formatted string
// to get the mvps and array of mvp players for each
for (mvps of mvpListSorted) {
  console.log(mvps + " EARNED: " + playersByMvpsEarned[mvps]);
}

/*
Which teams have made it to the NBA finals but have never won?
*/

// const fs = require("fs");
const nbaArray = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");

const objOfWinnersAndLosers = {
  winners: [],
  losers: [],
};
const losersNeverWinnersObj = {};

for (const row of nbaArray) {
  const element = row.split(",");
  const winner = element[1];
  const loser = element[2];

  objOfWinnersAndLosers.winners.push(winner);
  objOfWinnersAndLosers.losers.push(loser);
}

for (const loser of objOfWinnersAndLosers.losers) {
  if (loser === "LOSER" || objOfWinnersAndLosers.winners.includes(loser)) {
    continue;
  } else {
    losersNeverWinnersObj[loser] = "😑";
  }
}
console.log({ losersNeverWinnersObj });
