/*
- fn
- param of teamname
- outputs mvps on that team ever
*/

/*
- access each team from all occurrences
- grab the mvp for each team every time the team is accessed
- output a collection of the mvps for each time for all time
*/

const fs = require("fs");
const nbaFinalsStrings = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .trim();
const nbaFinalsArray = nbaFinalsStrings.split("\r\n");

const teamDict = {};
function getTeamMvpsForAllTime(teamName) {
  const allMvpsEver = [];

  for (let i = 0; i < nbaFinalsArray.length; i++) {
    const element = nbaFinalsArray[i].split(",");
    const team = element[1];
    const mvp = element[4];

    if (team === "Winner" || mvp === "") {
      continue;
    } else if (team) {
      teamName = team;
      teamDict[teamName] = allMvpsEver.push(mvp);
    }
  }
  return teamDict;
}
console.log(getTeamMvpsForAllTime(teamDict));
