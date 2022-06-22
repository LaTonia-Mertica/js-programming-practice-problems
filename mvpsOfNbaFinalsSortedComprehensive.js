// global
const fs = require("fs");

/*
PSEUDOCODE THEN CODE
-- file system
-- for loop to access mvps
-- object to track mvp counts
-- array to store mvp players by mvp counts
-- assign array of mvp players to mvp count in object 

Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const nbaFinalsArray = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ nbaFinalsArray });

// verbose
const allMvpPlayers = {};
const sixMvpPlayers = [];
const threeMvpPlayers = [];
const twoMvpPlayers = [];

for (const row of nbaFinalsArray) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!allMvpPlayers[mvp]) {
    allMvpPlayers[mvp] = 1;
  } else {
    allMvpPlayers[mvp]++;
  }
}

for (const [key, value] of Object.entries(allMvpPlayers)) {
  if (value === 1) {
    continue;
  } else if (value === 6) {
    sixMvpPlayers.push(key);
  } else if (value === 3) {
    threeMvpPlayers.push(key);
  } else if (value === 2) {
    twoMvpPlayers.push(key);
  }
}
console.log("\n", { allMvpPlayers });
console.log({ sixMvpPlayers }, { threeMvpPlayers }, { twoMvpPlayers }, "\n");

/*
PSEUDOCODE THEN CODE
-- file system
-- access each mvp
-- tally mvps earned
-- store all mvps
-- ignore one-time mvps
-- store key of mvps earned w/value of array of players earned that many mvps

Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const nbaFinalsArr = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ nbaFinalsArr });

// less verbose
const allMvps = {};
const multiMvps = {};

for (const row of nbaFinalsArr) {
  const element = row.split(",");
  const mvp = element[4];

  if (!allMvps[mvp]) {
    if (mvp === "MVP" || mvp === "") {
      continue;
    } else allMvps[mvp] = 1;
  } else {
    allMvps[mvp]++;
  }
}

for (const [key, value] of Object.entries(allMvps)) {
  if (value >= 2) {
    if (!(value in multiMvps)) {
      multiMvps[value] = [];
    }
    multiMvps[value].push(key);
  }
}
console.log(Object.entries(multiMvps).sort().reverse(), "\n");

/*
PSEUDOCODE THEN CODE
-- file system
-- access mvps
------- track all
------- track multi (non one-timers)
-- tally mvps
-- use multi tracker obj to store mvp tallies as key and array of mvp players as value (meaning transition needed data from track for every):
------- check if multi tracker obj has data THEN
------- first assign new obj value as empty array
------- then pass in mvp player to array value
-- sort output from most to least

Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const nbaFinals = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ nbaFinals });

// less verbose
const everyMvp = {};
const nonOneTimeMvp = {};

for (const row of nbaFinals) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!everyMvp[mvp]) {
    everyMvp[mvp] = 1;
  } else {
    everyMvp[mvp]++;
  }
}

// for in loop to check if entries from object with all mvps
// are greater than one
// and not in the object tracker for mvps more than one
for (const [key, value] of Object.entries(everyMvp)) {
  if (value >= 2) {
    if (!(value in nonOneTimeMvp)) {
      // assign value as key
      // with value of empty array
      nonOneTimeMvp[value] = [];
    }
    // push to value array
    nonOneTimeMvp[value].push(key);
  }
}
// sort from entries object
console.log(Object.entries(nonOneTimeMvp).sort().reverse(), "\n");

/*
PSEUDOCODE THEN CODE
-- file system
-- storage for each and storage for over ones
-- for loop to access content and reference each mvp
-- separate for in loop to transfer data from initial storage to final storage

Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const nbaF = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ nbaF });

// less verbose
const eachMvp = {};
const overOneMvps = {};

for (const row of nbaF) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!eachMvp[mvp]) {
    eachMvp[mvp] = 1;
  } else {
    eachMvp[mvp]++;
  }
}

for (const [key, value] of Object.entries(eachMvp)) {
  if (value >= 2) {
    if (!(value in overOneMvps)) {
      overOneMvps[value] = [];
    }
    overOneMvps[value].push(key);
  }
}
console.log(Object.entries(overOneMvps).sort().reverse(), "\n");

/*
PSEUDOCODE THEN CODE
-- file system
-- storage objects (2)
-- access mvps from array
-- add mvps to one storage
-- move needed mvps from that storage to other storage
-- console log with sort

Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const nba = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ nba });

// less less-verbose
const nbaMvpList = {};
const nbaMvpMultiList = {};

for (const row of nba) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (nbaMvpList[mvp] === undefined) {
    nbaMvpList[mvp] = 1;
  } else {
    nbaMvpList[mvp]++;
  }
}

for (const [key, value] of Object.entries(nbaMvpList)) {
  if (value >= 2) {
    if (!(value in nbaMvpMultiList)) {
      nbaMvpMultiList[value] = [];
    }
    nbaMvpMultiList[value].push(key);
  }
}
console.log(Object.entries(nbaMvpMultiList).sort().reverse(), "\n");

/*
PSEUDOCODE THEN CODE
-- file system
-- two storage objs
-- for loop to access elements and populate what w/b reference obj
-- create separate for in loop to access data in reference obj
------- ensure not including one-time mvps
------- check if data is in the second obj
------- assign value from reference obj to key in second obj with a value of an empty array
-- push mvp players to array value in second object
-- log while sorting

Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const finalResultsOfNbaPlayoffs = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ finalResultsOfNbaPlayoffs });

const finalResultsOfNbaPlayoffsObj = {};
const finalResultsOfNbaPlayoffsMultisObj = {};

for (const row of finalResultsOfNbaPlayoffs) {
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!finalResultsOfNbaPlayoffsObj[mvp]) {
    finalResultsOfNbaPlayoffsObj[mvp] = 1;
  } else {
    finalResultsOfNbaPlayoffsObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(finalResultsOfNbaPlayoffsObj)) {
  if (value >= 2) {
    if (!finalResultsOfNbaPlayoffsMultisObj[value]) {
      finalResultsOfNbaPlayoffsMultisObj[value] = [];
    }
    finalResultsOfNbaPlayoffsMultisObj[value].push(key);
  }
}
console.log(
  Object.entries(finalResultsOfNbaPlayoffsMultisObj).sort().reverse(),
  "\n"
);

/*
Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const finalNbaPlayoffResults = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ finalNbaPlayoffResults });

const finalNbaPlayoffResultsObj = {};
const finalNbaPlayoffMultiResultsObj = {};

for (let i = 0; i < finalNbaPlayoffResults.length; i++) {
  const row = finalNbaPlayoffResults[i];
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!finalNbaPlayoffResultsObj[mvp]) {
    finalNbaPlayoffResultsObj[mvp] = 1;
  } else {
    finalNbaPlayoffResultsObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(finalNbaPlayoffResultsObj)) {
  if (value >= 2) {
    if (!finalNbaPlayoffMultiResultsObj[value]) {
      finalNbaPlayoffMultiResultsObj[value] = [];
    }
    finalNbaPlayoffMultiResultsObj[value].push(key);
  }
}
console.log(
  Object.entries(finalNbaPlayoffMultiResultsObj).sort().reverse(),
  "\n"
);

/*
Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const finalNbaPlayoffs = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ finalNbaPlayoffs });

const finalNbaPlayoffsObj = {};
const finalNbaPlayoffsMultiObj = {};

for (let i = 0; i < finalNbaPlayoffs.length; i++) {
  const row = finalNbaPlayoffs[i];
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!finalNbaPlayoffsObj[mvp]) {
    finalNbaPlayoffsObj[mvp] = 1;
  } else {
    finalNbaPlayoffsObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(finalNbaPlayoffsObj)) {
  if (value >= 2) {
    if (!finalNbaPlayoffsMultiObj[value]) {
      finalNbaPlayoffsMultiObj[value] = [];
    }
    finalNbaPlayoffsMultiObj[value].push(key);
  }
}
console.log(Object.entries(finalNbaPlayoffsMultiObj).sort().reverse(), "\n");

/*
Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const finalNba = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ finalNba });

const finalNbaObj = {};
const finalNbaMultiObj = {};

for (let i = 0; i < finalNba.length; i++) {
  const row = finalNba[i];
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!finalNbaObj[mvp]) {
    finalNbaObj[mvp] = 1;
  } else {
    finalNbaObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(finalNbaObj)) {
  if (value >= 2) {
    if (!(value in finalNbaMultiObj)) {
      finalNbaMultiObj[value] = [];
    }
    finalNbaMultiObj[value].push(key);
  }
}
console.log(Object.entries(finalNbaMultiObj).sort().reverse(), "\n");

/*
Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const arrMvp = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ arrMvp });

const mvpObj = {};
const mvpMultiObj = {};

for (let i = 0; i < arrMvp.length; i++) {
  const row = arrMvp[i];
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!mvpObj[mvp]) {
    mvpObj[mvp] = 1;
  } else {
    mvpObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(mvpObj)) {
  if (value >= 2) {
    if (!mvpMultiObj[value]) {
      mvpMultiObj[value] = [];
    }
    mvpMultiObj[value].push(key);
  }
}
console.log(Object.entries(mvpMultiObj).sort().reverse(), "\n");

/*
Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const mvpArr = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ mvpArr });

const mvpArrObj = {};
const mvpArrMultiObj = {};

for (let i = 0; i < mvpArr.length; i++) {
  const row = mvpArr[i];
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!mvpArrObj[mvp]) {
    mvpArrObj[mvp] = 1;
  } else {
    mvpArrObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(mvpArrObj)) {
  if (value >= 2) {
    if (!mvpArrMultiObj[value]) {
      mvpArrMultiObj[value] = [];
    }
    mvpArrMultiObj[value].push(key);
  }
}
console.log(Object.entries(mvpArrMultiObj).sort().reverse(), "\n");

/*
Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const mvpArray = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ mvpArray });

const mvpArrayObj = {};
const mvpArrayMultiObj = {};

for (let i = 0; i < mvpArray.length; i++) {
  const row = mvpArray[i];
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!mvpArrayObj[mvp]) {
    mvpArrayObj[mvp] = 1;
  } else {
    mvpArrayObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(mvpArrayObj)) {
  if (value >= 2) {
    if (!mvpArrayMultiObj[value]) {
      mvpArrayMultiObj[value] = [];
    }
    mvpArrayMultiObj[value].push(key);
  }
}
console.log(Object.entries(mvpArrayMultiObj).sort().reverse(), "\n");

/*
Print Ranking of NBA Players Who Have Won MVP More Than Once
    - print the ranking by the amount of times won like below
        - 6 times: Michael Jordan
        - 3 times: Shaquille O'Neal, LeBron James
        - 2 times: Kevin Durant, Kobe Bryant, Hakeem Olajuwon
*/
const arrayMvp = fs
  .readFileSync("nba_finals.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\r\n");
// console.log({ arrayMvp });

const arrayMvpObj = {};
const arrayMvpMultiObj = {};

for (let i = 0; i < arrayMvp.length; i++) {
  const row = arrayMvp[i];
  const element = row.split(",");
  const mvp = element[4];

  if (mvp === "MVP" || mvp === "") {
    continue;
  } else if (!arrayMvpObj[mvp]) {
    arrayMvpObj[mvp] = 1;
  } else {
    arrayMvpObj[mvp]++;
  }
}

for (const [key, value] of Object.entries(arrayMvpObj)) {
  if (value >= 2) {
    if (!arrayMvpMultiObj[value]) {
      arrayMvpMultiObj[value] = [];
    }
    arrayMvpMultiObj[value].push(key);
  }
}
console.log(
  "MVPS EARNED: ",
  Object.entries(arrayMvpMultiObj).sort().reverse(),
  "\n"
);
