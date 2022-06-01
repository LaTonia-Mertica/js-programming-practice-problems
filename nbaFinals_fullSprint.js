/*
[x] Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

[x] Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

[x] Which teams have made it to the NBA finals but have never won?

[x] Print out a ranking of who has won the MVP more than once, by times won
    ie. output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: <etc>
*/

const fs = require("fs");
const nbaStr = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nbaArr = nbaStr.split("\r\n");

function getNbaFinalsWinnerByYear(y) {
  const winnerByYearObj = {};

  for (const row of nbaArr) {
    const element = row.split(",");
    // option to parse year into integer
    const year = element[0];
    const winner = element[1];
    const loser = element[2];
    const score = element[3];
    const mvp = element[4];

    if (y === year) {
      winnerByYearObj[year] = winner;
    }
  }
  return winnerByYearObj;
}
// if parse year into integer above
// must use numeric value (not string) here
console.log(getNbaFinalsWinnerByYear("1995"));

function getByTeamAllYearsTeamWon(team) {
  const allYearsTeamWonObj = {};
  let yearsWonArray = [];

  for (const row of nbaArr) {
    const element = row.split(",");
    const year = parseInt(element[0]);
    const winner = element[1];
    const loser = element[2];
    const score = element[3];
    const mvp = element[4];

    if (allYearsTeamWonObj[team] === undefined && typeof year === "string") {
      year = parseInt(year);
      allYearsTeamWonObj[team] = yearsWonArray = [year];
    } else if (team === winner) {
      yearsWonArray.push(year);
      allYearsTeamWonObj[team] = yearsWonArray;
    }
  }
  return allYearsTeamWonObj;
}
console.log(getByTeamAllYearsTeamWon("MIAMI HEAT"));

const nbaFinalsTeamsObj = { winners: [], defeated: [] };
const defeatedObj = {};

for (const row of nbaArr) {
  const element = row.split(",");
  const year = element[0];
  const winner = element[1];
  const defeated = element[2];
  const score = element[3];
  const mvp = element[4];

  if (winner === "WINNER" || defeated === "LOSER") {
    continue;
  }

  nbaFinalsTeamsObj["winners"].push(winner);
  nbaFinalsTeamsObj["defeated"].push(defeated);
}

for (const team of nbaFinalsTeamsObj["defeated"]) {
  if (nbaFinalsTeamsObj["winners"].includes(team)) {
    continue;
  } else {
    defeatedObj[team] = "😞";
  }
}
console.log(Object.keys(defeatedObj));

const mvpObj = {};
const multiMvpObj = {};

for (const row of nbaArr) {
  const element = row.split(",");
  const player = element[4];

  if (player === "") {
    continue;
  }
  if (!(player in mvpObj)) {
    mvpObj[player] = 1;
  } else {
    mvpObj[player]++;
  }
}

for (const [key, value] of Object.entries(mvpObj)) {
  if (value === 1) {
    continue;
  } else {
    multiMvpObj[key] = value;
  }
}

const mvpsToPlayersObj = {};
for (const [player, mvpWins] of Object.entries(mvpObj)) {
  if (mvpWins === 1) {
    continue;
  }
  if (!(mvpWins in mvpsToPlayersObj)) {
    mvpsToPlayersObj[mvpWins] = [];
  }
  mvpsToPlayersObj[mvpWins].push(player);
}

const sortByMvps = Object.keys(mvpsToPlayersObj).sort().reverse();

for (mvpWins of sortByMvps) {
  console.log(mvpWins + " WINS " + mvpsToPlayersObj[mvpWins].join(", "));
}
