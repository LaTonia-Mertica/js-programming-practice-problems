const fs = require("fs");
const { workerData } = require("worker_threads");
const nbaArray = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
const wordArray = fs
  .readFileSync("sowpods.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

/* Write a function that takes as an argument a year and returns the winner of the NBA finals that year. */
function getNbaFinalsWinnerByYear(y) {
  for (const row of nbaArray) {
    const element = row.split(",");
    const year = parseInt(element[0]);
    const winner = element[1];

    if (y === year) {
      return winner;
    }
  }
}
console.log(getNbaFinalsWinnerByYear(2009));

/* Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals. */
function getYearsWonByTeamName(t) {
  const teamYearsWonObj = { team: [] };

  for (const row of nbaArray) {
    const element = row.split(",");
    const year = element[0];
    const winner = element[1];

    if (t === winner) {
      teamYearsWonObj.team.push(year);
    }
  }
  return teamYearsWonObj;
}
console.log(getYearsWonByTeamName("NEW YORK KNICKS"));

/* Which teams have made it to the NBA finals but have never won? */
const winnersAndLosersObj = {
  winners: [],
  losers: [],
};
const neverNbaWinnersObj = {};

for (const row of nbaArray) {
  const element = row.split(",");
  const winner = element[1];
  const loser = element[2];

  winnersAndLosersObj.winners.push(winner);
  winnersAndLosersObj.losers.push(loser);
}

for (const loser of winnersAndLosersObj.losers) {
  if (loser === "LOSER" || winnersAndLosersObj.winners.includes(loser)) {
    continue;
  } else {
    neverNbaWinnersObj[loser] = "😩";
  }
}
console.log({ neverNbaWinnersObj });

/* Print a ranking of who has won the MVP more than once, by times won. ie. output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon */
const everyMvp = {};
const moreThanOneMvpPlayers = {};
const mvpsByArraysOfPlayers = {};

for (const row of nbaArray) {
  const element = row.split(",");
  const player = element[4];

  if (player === "" || player === "MVP" || player === 1) {
    continue;
  }

  if (player in everyMvp) {
    everyMvp[player]++;
  } else {
    everyMvp[player] = 1;
  }
}

for (const [key, value] of Object.entries(everyMvp)) {
  if (value === 1) {
    continue;
  } else {
    moreThanOneMvpPlayers[key] = value;
  }
}

for (const [player, mvps] of Object.entries(everyMvp)) {
  if (mvps === 1) {
    continue;
  }
  if (!(mvps in mvpsByArraysOfPlayers)) {
    mvpsByArraysOfPlayers[mvps] = [];
  }
  mvpsByArraysOfPlayers[mvps].push(player);
}

const sortedObj = Object.keys(mvpsByArraysOfPlayers).sort().reverse();

for (mvps of sortedObj) {
  console.log({ mvps }, mvpsByArraysOfPlayers[mvps]);
}

/* What are all of the words that can be made without the letters in “AEIOSHRTN” Not all of those letters need to be used, and letters can be repeated. */

const lettersWordCannotInclude = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];
const wordsWithoutLettersCannotInclude = [];

for (const word of wordArray) {
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (lettersWordCannotInclude.includes(letter)) {
      break;
    } else if (i === word.length - 1) {
      wordsWithoutLettersCannotInclude.push(word);
    }
  }
}
console.log({ wordsWithoutLettersCannotInclude });

/* What is the longest word that can be made without the letters in “AEIOSHRTN” Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties. */
const lettersWordMustNotInclude = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];
let longestWordCreatedWithoutContainingSaidLetters;
const wordsCreatedWithoutContainingSaidLetters = [];
const longestWordsCreatedWithoutContainingSaidLetters = [];

for (const word of wordArray) {
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (lettersWordMustNotInclude.includes(letter)) {
      break;
    } else if (i === word.length - 1) {
      wordsCreatedWithoutContainingSaidLetters.push(word);
    }
  }
}

for (const word of wordsCreatedWithoutContainingSaidLetters) {
  if (
    !longestWordCreatedWithoutContainingSaidLetters ||
    word.length > longestWordCreatedWithoutContainingSaidLetters.length
  ) {
    longestWordCreatedWithoutContainingSaidLetters = word;
  } else if (
    word.length === longestWordCreatedWithoutContainingSaidLetters.length
  ) {
    longestWordsCreatedWithoutContainingSaidLetters.push(word);
  }
}
console.log(
  { longestWordCreatedWithoutContainingSaidLetters },
  { longestWordsCreatedWithoutContainingSaidLetters }
);

/* What are all of the words that have at least 3 different double letters? 

For example, “BOOKKEEPER” is an answer to this question because it has a double-O, a double-K, and a double-E. */
const wordsWithAtLeast3SetsOfDoubleLetters = [];
for (const word of wordArray) {
  const doubleLetterSets = [];
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (word.includes(letter + letter)) {
      if (!doubleLetterSets.includes(letter)) {
        doubleLetterSets.push(letter);
      }
    }
    if (i === word.length - 1) {
      if (doubleLetterSets.length >= 3) {
        wordsWithAtLeast3SetsOfDoubleLetters.push(word);
      }
    }
  }
}
console.log({ wordsWithAtLeast3SetsOfDoubleLetters });
