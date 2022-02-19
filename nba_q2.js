/*
QUESTION: Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

PSEUDOCODE
[x] arrange file system to access and tidy data set
[x] create fn that accepts team name as a parameter
[x] create empty dictionary to track/store years team won finals
[x] for loop to iterate through array by row
[x] split row on commas to access elements of data set individually
[x] declare variables assigned to 1) winner team name and 2) year winner team won
[x] check for winner inside winners dictionary
[x] push if winner already known to array
[x] otherwise initialize and push if winner not yet known to array
[x] search dict by key and grab the value of year(s)
[x] return years grabbed into array of values for each team in dictionary 
[x] apply aka call/invoke function passing team name as argument in console.log statement to output years team won finals

COMMENTS
- using a two dimensional array, makes it easier to access each "cell" of the CSV ... i.e.
nbaResultsArr2 = [
  ["1963", "Boston Celtics", "Los Angeles Lakers", "4-3"],
  ["1987", "Boston Celtics", "Chicago Bulls", "4-0"],
  ["1988", "Boston Celtics", "Golden State Warriors", "3-1"],
]

GOAL: make this dictionary of winners out of the CSV
let winners = { "Knicks": [1998, 2000, 2011]}

HELPFUL HINTS
- how to check if a key exists in a dictionary (JS object)
------- if (winner in winnersDict) { ... }
- how to edit an array that already exists / how to update a value for a key in a dictionary
------- example: how to go from {"Knicks": [1990]} to {"Knicks": [1990, 2000], "Lakers": [...]}
------- winnersDict[winner] = []
- winnersDict[winner].push(WHATEVER)
*/

// require file system to make capability possible for reading file
const fs = require("fs");
// assign value of csv converted to strings to nbaResultsStr variable
const nbaResultsStr = fs.readFileSync("nba_finals.csv").toString("utf-8");
// assign value of nbaResultsStr strings converted into array to nbaResultsArr
const nbaResultsArr = nbaResultsStr.split("\r\n");

// dictionary to track/store the data
let winnersDict = {};

// function with parameter named team
const getYearsWonFinals = (team) => {
  // test accessing data set
  // console.log(team);

  // for of loop through array, split applied to rows of strings, variable declarations and assignments
  for (let row of nbaResultsArr) {
    let element = row.split(",");
    let winner = element[1];
    let year = element[0];

    // nested if statement to check for winner inside winners dictionary
    if (winner in winnersDict) {
      // push year onto already initialized array for winner
      winnersDict[winner].push(year);
    } else {
      // intialize array for winner
      winnersDict[winner] = [year];
    }
  }
  // return statement to prepare value output via console log
  return winnersDict[team];
};
// invoke/apply/call fn
console.log(getYearsWonFinals("Los Angeles Lakers"));
