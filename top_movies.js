/*
QUESTIONS
- What movies on this list were distributed by DreamWorks? 
- What is the highest grossing moving from Universal Pictures, domestically?
- What distributor has the most films on this list?         
- What is the earliest year on this list, and what were the films from that year?
- What is the distribution of ratings? (How many are PG, PG-13, R, etc.?) 
 */

// require fs
const fs = require("fs");
// convert data to strings
const topMoviesStr = fs.readFileSync("top_movies.csv").toString("utf-8");
// separate data in strings by commas
const topMoviesArr = topMoviesStr.toUpperCase().split("\r\n");

let distributorsDict = {};
let dreamWorksMovies = [];

for (let row of topMoviesArr) {
  let element = row.split(",");
  let movieTitle = element[0];
  // test access to movie titles
  // console.log(movieTitle);
  let distributor = element[1];
  // test access to distributors
  // console.log(distributor);

  distributorsDict["distributor"] = distributor;
  // distributorsDict["distributor"] = movieTitle;
  // distributorsDict["title"] = movieTitle;
  // test access to distributors dict properties
  // console.log("\nDISTRIBUTORS\n", distributorsDict);

  // output with key of distributor and value of movies
  distributorsDict[distributor] = movieTitle;
  // console.log("\n MOVIE TITLES BY DISTRIBUTOR\n", distributorsDict);

  if (
    distributor === "DREAMWORKS" ||
    distributor === "DREAMWORKS DISTRUBUTION"
  ) {
    dreamWorksMovies.push(movieTitle);
  }
}

console.log("\nMOVIES DISTRIBUTED BY DREAMWORKS\n", dreamWorksMovies);
