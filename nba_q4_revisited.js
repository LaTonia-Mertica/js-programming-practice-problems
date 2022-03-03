/*

QUESTION: 
[😝] Print out a ranking of who has won the MVP more than once, by times won ie. output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: <etc>

PSEUDOCODE
[x] declare a dict empty with key player name and value times mvp
[x] declare variable assigned to team player name
[x] loop thru nba strings array by row
[x] skip/continue when come to string with no mvp
[x] if player is not in dict add player with value of 1
[x] otherwise add one to player's value
[x] increment each time player is mvp
[x] omit players with only one mvp
[x] order players from most to least mvp wins
[x] console log
    
    */

// require file system to make capability possible for reading file
const fs = require("fs");
// assign value of csv converted to strings to nbaResultsStr variable
const nbaResultsStr = fs.readFileSync("nba_finals.csv").toString("utf-8");
// assign value of nbaResultsStr strings converted into array to nbaResultsArr
const nbaResultsArr = nbaResultsStr.split("\r\n");

// dict for all data
let mvpDict = {};
// dict for players with multi mvps
let multiMvpPlayerDict = {};

// array each for 2, 3, and 6 mvps earned
let sixMvpPlayers = [];
let threeMvpPlayers = [];
let twoMvpPlayers = [];

// iterate through array by row
// split elements in rows on commas
// assign player variable value of player name
for (let row of nbaResultsArr) {
  let element = row.split(",");
  let player = element[4];

  // skip empty strings
  if (player === "") {
    continue;
  }

  // when player exists in object increment count by one
  if (player in mvpDict) {
    mvpDict[player]++;
    // otherwise add player with count of one
  } else {
    mvpDict[player] = 1;
  }
}

// use object entries method in/as loop iteration to access keys and values
for (const [key, value] of Object.entries(mvpDict)) {
  // when value equals one skip player aka do not add player/value
  if (value === 1) {
    continue;
    // otherwise add the key-value pair to dict
  } else {
    multiMvpPlayerDict[key] = value;
  }
}

// reusable way to compare number of wins and group them by number of wins they got
// expected outcome
// {
// 6 Wins: listOfPlayersHere,
// 3 Wins: listOfPlayersHere,
// 2 Wins: listOfPlayersHere
// }

// use object entries method in/as loop iteration to access keys and values
let winsToPlayers = {};
for (const [player, mvpWins] of Object.entries(mvpDict)) {
  if (mvpWins === 1) {
    continue;
  }
  if (!(mvpWins in winsToPlayers)) {
    winsToPlayers[mvpWins] = [];
  }
  winsToPlayers[mvpWins].push(player);
}
let orderedKeys = Object.keys(winsToPlayers).sort().reverse();
console.log(orderedKeys);
for (mvpWins of orderedKeys) {
  console.log(mvpWins);
  console.log(mvpWins + " WINS: " + winsToPlayers[mvpWins].join(", "));
}
// initial console log replaced with formatted output above
// console.log(winsToPlayers);

// COMPARISON
// BELOW CODE SAME BUT VERBOSE VERSION OF CODE LINES 81 TO 96 ABOVE
// for (const [player, mvpWins] of Object.entries(mvpDict)) {
//   if (mvpWins === 1) {
//     continue;
//   }
//   if (mvpWins in winsToPlayers) {
//     winsToPlayers[mvpWins].push(player);
//   } else {
//     winsToPlayers[mvpWins] = [];
//     winsToPlayers[mvpWins].push(player);
//   }
// }

// console log formatted strings
// console.log("\nALL MVP KEY-VALUE PAIRS: ", mvpDict);
// console.log("\nMULTI MVP PLAYERS: ", multiMvpPlayerDict);
// console.log(
//   "\nPLAYERS GROUPED BY MVPS EARNED\n" +
//     "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
//     "6 MVP WINS: " +
//     sixMvpPlayers,
//   "\n3 MVP WINS: " + threeMvpPlayers,
//   "\n2 MVP WINS: " + twoMvpPlayers + "\n"
// );

// test access to data
// console.log("MVP PLAYERS: ", Object.keys(mvpDict));
// console.log("MVP TOTALS: ", Object.values(mvpDict));

/*
task: get the people who mvp'd 3 times and print them together

- store an array of 3 times winners
- loop through whole array of mvps
--- if this mvp's count is 3, store them
print out the array

issue: i have to repeat this list for every value?!

solution: loop through the dict once?

- create a dictionary mapping from mvp count to list of players:
{
  3: ['Shaq', 'LeBron', ...],
  6: ['Michael Jordan']
}
*/
