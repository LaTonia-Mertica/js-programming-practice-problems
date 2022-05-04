/*
[] Find the artists ranked number one and their respective songs
*/

// arrange file system to access and read data from the provided data source
const fs = require("fs");
const billboardStrings = fs
  .readFileSync("billboard100_2000.csv")
  .toString("utf-8");
const billboardArray = billboardStrings.split("\n");

const artistsRankedNumOneAndTheirSongs = {};

// need artist
// need rank of number 1
// need songs
// array uses zero indexing
for (let row of billboardArray) {
  const element = row.split(",");
  const rank = element[0];
  const song = element[1];
  const artist = element[2];

  // need to exclude rankings that do not meet criteria
  if (!rank === 1) {
    continue;
  } else {
    // need to tell dictionary aka object key-value pairs
    artistsRankedNumOneAndTheirSongs[artist] = song;
  }
}
for (const song in artistsRankedNumOneAndTheirSongs) {
  console.log(
    "\n" + "'" + song + "'" + " - " + artistsRankedNumOneAndTheirSongs[song]
  );
}

console.log("\n");
console.log({ artistsRankedNumOneAndTheirSongs });

// Prince is color white because just one word
// Mariah Carey is green (in my terminal) and has single quotes because it is multiple words
