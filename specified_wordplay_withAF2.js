/*
- fn
- param of teamname
- outputs mvps on that team ever
*/

/*
- access each team from all occurrences
- grab the mvp for each team every time the team is accessed
- output a collection of the mvps for each team for all time
*/
// const { performance, PerformanceObserver } = require("perf_hooks");
const { performance } = require("perf_hooks");

const fs = require("fs");
const nbaFinalsStrings = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .trim();
const nbaFinalsArray = nbaFinalsStrings.split("\r\n");

function getTeamMvpsForAllTime(teamname) {
  const teamDict = {};
  const teamMvpsOfAllTime = [];
  for (let i = 0; i < nbaFinalsArray.length; i++) {
    const element = nbaFinalsArray[i].split(",");
    const year = element[0];
    const team = element[1];
    const mvp = element[4];

    if (team === "Winner" || mvp === "") {
      continue;
    } else if (team === teamname) {
      teamMvpsOfAllTime.push(mvp + " ," + year);
      teamDict[team] = teamMvpsOfAllTime;
    }
  }
  return teamDict;
}
// startTime = Date.now();
startTime = performance.now();
console.log("Houston Rockets", getTeamMvpsForAllTime("Houston Rockets"));
duration = performance.now() - startTime;
console.log({ duration });

function getTeamMvpsForAllTime(teamname) {
  const teamDict = {};
  for (let i = 0; i < nbaFinalsArray.length; i++) {
    const element = nbaFinalsArray[i].split(",");
    const year = element[0];
    const team = element[1];
    const teamKey = element[1].toUpperCase();
    const mvp = element[4];

    if (team === "Winner" || mvp === "") {
      continue;
    }
    if (teamDict[teamKey] === undefined) {
      teamDict[teamKey] = [];
    }
    teamDict[teamKey].push(mvp + ", " + year);
  }
  return teamDict[teamname.toUpperCase()];
}

// startTime = Date.now();
startTime = performance.now();
console.log("Los Angeles Lakers", getTeamMvpsForAllTime("Los Angeles Lakers"));
duration = performance.now() - startTime;
console.log({ duration });

/*
fn for load/populate dict
fn to get data ... end up not needing a separate 
function because can use existing dictionary
*/

function loadDict(nbaArray) {
  const teamDict = {};
  for (let i = 0; i < nbaArray.length; i++) {
    const element = nbaArray[i].split(",");
    const year = element[0];
    const team = element[1];
    const teamKey = element[1].toUpperCase();
    const mvp = element[4];

    if (team === "Winner" || mvp === "") {
      continue;
    }
    if (teamDict[teamKey] === undefined) {
      teamDict[teamKey] = [];
    }
    teamDict[teamKey].push(mvp + ", " + year);
  }
  return teamDict;
}
myDict = loadDict(nbaFinalsArray);
// console.log(myDict["BOSTON CELTICS"]);

startTime = performance.now();
console.log("BOSTON CELTICS", myDict["BOSTON CELTICS"]);
console.log("NEW YORK KNICKS", myDict["NEW YORK KNICKS"]);
duration = performance.now() - startTime;
console.log({ duration });
