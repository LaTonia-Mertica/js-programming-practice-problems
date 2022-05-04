/*
[] Find movies that were distributed by Dreamworks
*/

// file system
const fs = require("fs");
// utf-8 localizes the read/output of the data
const moviesByLine = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase();
const movieArray = moviesByLine.split("\r\n");

const dreamworksMovies = [];

const findDreamworksDistributions = () => {
  for (let line of movieArray) {
    // breaks data up by each element before each comma
    const element = line.split(",");
    // grabs each element by index starting at index 0
    const distributor = element[1];
    const title = element[0];

    // using same letter case allowed is to get the results
    if (distributor.includes("DREAMWORKS")) {
      dreamworksMovies.push(title);
    }
  }
  console.log("\n" + dreamworksMovies.length + " DREAMWORKS MOVIES", {
    dreamworksMovies,
  });
};

// must invoke aka call the function
findDreamworksDistributions();
