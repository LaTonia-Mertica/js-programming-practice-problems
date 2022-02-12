/*
QUESTION: Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
NOTE: key output is [ 'Year', 'Winner', 'Loser', 'Score', 'MVP' ]

PSEUDOCODE
[x] access data in the csv file
[x] split on \r and \n to arrange the data into rows 
[x] split rows on the commas to access individual data points
[] remove empty strings from misc array data/item sets? ... N/A
[x] set keys and add values to the keys (extraction) using for in loops ... Need For Of Loop
[x] read/evaluate data in the object/dict
[] ensure line breaks in csv for file to be properly read ... ?N/A?
[x] create fn that accepts argument of year
[x] ensure fn returns winner of the nba finals that year
[x] console.log

comparison of pseudocode above to that below illustrates what I thought needed to happen versus what Jessica knew needed to happen, and streamlined getting the dict fully set up 

PSEUDOCODE BY JESSICA McKELLAR
// Get the data from the file into an array of lines
// Set up an empty winners dictionary
// For every line in the array:
// Split the line on a comma => [“1978”,”Boston Celtics”,”4-3”]
// Pull out the year from that line and assign it to a variable
// Pull out the winner from that line and assign it to a variable
// Add the year and winner as a key/value pair in the winners dictionary
*/

// 3 lines of code below set up accessing the csv and converting the data into strings in arrays on their own rows
const fs = require("fs");
const nbaResultsStr = fs.readFileSync("nba_finals.csv").toString("utf-8");
const nbaResultsArr = nbaResultsStr.split("\r\n");

// dictionary to track/store the data
let winnersDict = {};

// for of loop to iterate through each string in the array, declare a variable 1) for the array of strings that's assigned the value of the strings as separated by commas, 2) to the year accessed by index and converted from string into integer, 3) to the winner accessed by index, AND THEN accessing the year from the array by variable name that's assigned to the value of winner from the dict key-value pair
for (let string of nbaResultsArr) {
  let stringArray = string.split(",");
  let year = parseInt(stringArray[0]);
  let winner = stringArray[1];
  winnersDict[year] = winner;
}

// function named winnerTeam passing parameter called year and returning from the dictionary the year accessed by variable name from the dictionary
function winnerTeam(year) {
  return winnersDict[year];
}

// console log passing argument of year accessed as integer from function named winnerTeam
console.log(winnerTeam(1975));

// test dictionary key-value pairs populating as expected
// console.log(winnersDict);
