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
console.log(getTeamMvpsForAllTime("Boston Celtics"));
