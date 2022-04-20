/*
[ ] What is the highest grossing domestic movie from Universal Pictures?

[ ] What distributor has the most films on this list?      

[ ] What is the earliest year on this list, and what were the films from that year?
*/

/*
[x] What movies on this list were distributed by DreamWorks?
[x] Use function to get movies on this list distributed by DreamWorks?
*/
const fs = require("fs");
const topMovieStrings = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase();

const topMoviesArray = topMovieStrings.split("\r\n");

// const dreamworksTitles = [];
// for (let i = 0; i < topMoviesArray.length; i++) {
//   const element = topMoviesArray[i].split(",");
//   const distributor = element[1];
//   const title = element[0];

//   if (distributor.includes("DREAM")) {
//     dreamworksTitles.push(title);
//   }
// }
// console.log({ dreamworksTitles });

// function getDistributorTitles(distributorName) {
//   const distributorTitles = [];
//   for (let i = 0; i < topMoviesArray.length; i++) {
//     const element = topMoviesArray[i].split(",");
//     const distributor = element[1];
//     const title = element[0];

//     if (distributor.includes(distributorName)) {
//       distributorTitles.push(title);
//     }
//   }
//   return distributorTitles;
// }
// console.log(getDistributorTitles("DISNEY"));

/*
[ ] What is the numeric distribution of ratings (PG, PG-13, R, etc.)?  
*/

const ratingDistributionsDict = {};
const validRatingValues = ["NA", "PG", "PG-13", "G", "R"];

let naCount = 0;
let pgCount = 0;
let pg13Count = 0;
let gCount = 0;
let rCount = 0;

for (let i = 0; i < topMoviesArray.length; i++) {
  const element = topMoviesArray[i].split(",");
  const rating = element[6];

  if (!validRatingValues.includes(rating)) {
    continue;
  }

  // must use counter to track increments by rating
  if (rating === "NA") {
    ratingDistributionsDict[rating] = naCount++;
  } else if (rating === "PG") {
    ratingDistributionsDict[rating] = pgCount++;
  } else if (rating === "PG-13") {
    ratingDistributionsDict[rating] = pg13Count++;
  } else if (rating === "G") {
    ratingDistributionsDict[rating] = gCount++;
  } else if (rating === "R") {
    ratingDistributionsDict[rating] = rCount++;
  } else {
    console.log("INVALID RATING");
  }
}

console.log({ ratingDistributionsDict });
