/*
[x] Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

[x] Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

[x] Which teams have made it to the NBA finals but have never won?

[x] What team has the most losses listed?

[] Print out a ranking of who has won the MVP more than once, by times won. ie. output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const fs = require("fs");
const nbaFinalsStr = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const nbaFinalsArr = nbaFinalsStr.split("\r\n");

// array method
function getNbaFinalsWinnerByYear(y) {
  for (const row of nbaFinalsArr) {
    const element = row.split(",");
    const year = parseInt(element[0]);
    const team = element[1];

    if (y === year) {
      return team;
    }
  }
}
console.log(getNbaFinalsWinnerByYear(1987));

// object method
function getNbaFinalsWinnerByYear(yr) {
  const yearTeamObj = {};

  for (const row of nbaFinalsArr) {
    const element = row.split(",");
    const year = parseInt(element[0]);
    const team = element[1];

    if (yr === year) {
      if (yearTeamObj[yr] === undefined) {
        yearTeamObj[yr] = team;
      }
    }
  }
  return yearTeamObj;
}
console.log(getNbaFinalsWinnerByYear(2007));

// array method
function getYearsWonByTeam(t) {
  let yearsTeamWon = [];

  for (const row of nbaFinalsArr) {
    const element = row.split(",");
    const year = parseInt(element[0]);
    const team = element[1];

    if (t === team) {
      yearsTeamWon.push(year);
    }
  }
  return t + ": " + yearsTeamWon;
}
console.log(getYearsWonByTeam("CHICAGO BULLS"));

// object method
function getYearsWonByTeam(tm) {
  const yearsTeamWonObj = {};

  for (const row of nbaFinalsArr) {
    const element = row.split(",");
    const year = parseInt(element[0]);
    const team = element[1];

    if (tm === team) {
      if (yearsTeamWonObj.team === undefined) {
        yearsTeamWonObj.team = [];
      }
      yearsTeamWonObj.team.push(team + ": " + year);
    }
  }
  return yearsTeamWonObj.team;
}
console.log(getYearsWonByTeam("BOSTON CELTICS"));

const teamsObj = { winners: [], defeated: [] };
const neverWinners = {};

for (const row of nbaFinalsArr) {
  const element = row.split(",");
  const winner = element[1];
  const defeated = element[2];

  if (!(winner in teamsObj)) {
    teamsObj.winners.push(winner);
  }
  if (!(defeated in teamsObj)) {
    teamsObj.defeated.push(defeated);
  }
}

for (defeated of teamsObj.defeated) {
  if (defeated === "LOSER") {
    continue;
  } else if (!teamsObj.winners.includes(defeated)) {
    neverWinners[defeated] = "😳";
  }
}
console.log({ neverWinners });

const allDefeatedTeams = {};
let mostDefeatedTeamCount = 0;
let mostDefeatedTeam;

for (const row of nbaFinalsArr) {
  const element = row.split(",");
  const unWonner = element[2];

  if (unWonner === "LOSER") {
    continue;
  } else if (allDefeatedTeams[unWonner] === undefined) {
    allDefeatedTeams[unWonner] = 1;
  } else {
    allDefeatedTeams[unWonner]++;
  }

  if (allDefeatedTeams[unWonner] > mostDefeatedTeamCount) {
    mostDefeatedTeamCount = allDefeatedTeams[unWonner];
    mostDefeatedTeam = unWonner;
  }
}
// seems correct ... online search says LA LAKERS have 15 losses (to date)
// they must average a 50-50 win:loss record given online search says 17 wins (to date)
console.log({ mostDefeatedTeamCount }, { mostDefeatedTeam });

const mvpObj = {};
const multiMvpPlayersObj = {};

for (const row of nbaFinalsArr) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "") {
    continue;
  } else if (!(mvp in mvpObj)) {
    mvpObj[mvp] = 1;
  } else {
    mvpObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(mvpObj)) {
  if (value === 1) {
    continue;
  } else {
    multiMvpPlayersObj[key] = value;
  }
}

const mvpPlayersByMvpWinsObj = {};
for (const [mvpPlayer, mvpWins] of Object.entries(mvpObj)) {
  if (mvpWins === 1) {
    continue;
  }

  if (!(mvpWins in mvpPlayersByMvpWinsObj)) {
    mvpPlayersByMvpWinsObj[mvpWins] = [];
  }
  mvpPlayersByMvpWinsObj[mvpWins].push(mvpPlayer);
}

const mvpKeysSorted = Object.keys(mvpPlayersByMvpWinsObj).sort().reverse();

for (mvpWins of mvpKeysSorted) {
  console.log(mvpWins + " WINS " + mvpPlayersByMvpWinsObj[mvpWins].join(", "));
}
