// global use content next three const statements
// require fs
const fs = require("fs");
// convert data to strings
const topMoviesStr = fs.readFileSync("top_movies.csv").toString("utf-8");
// separate data in strings by commas
const topMoviesArr = topMoviesStr.toUpperCase().split("\r\n");

/*
QUESTION 1 OF 5
- What movies on this list were distributed by DreamWorks? 
 */
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

/*
QUESTION 2 OF 5
- What is the highest grossing moving from Universal Pictures, domestically?
 */
let distributorsDict2 = {};
let universalPicturesMovies = [];
let universalPicturesDomesticSales = [];
let universalPicturesHighestGrossingDomesticMovie;

for (let row of topMoviesArr) {
  let element1 = row.split(",");
  let distributor2 = element1[1];
  let movieTitle2 = element1[0];
  let domesticSales = element1[3];

  distributorsDict2["distributor2"] = distributor2;
  // test data access
  // console.log(distributorsDict2);
  distributorsDict2["distributor2"] = movieTitle2;
  // test data access
  // console.log(distributorsDict2);
  distributorsDict2["distributor2"] = domesticSales;
  // test data access
  // console.log(distributorsDict2);
  distributorsDict2[distributor2] = movieTitle2 + "," + domesticSales;
  // test data access
  // console.log(distributorsDict2);

  if (distributor2 === undefined) {
    continue;
  }

  if (distributor2 === "UNIVERSAL PICTURES") {
    universalPicturesMovies.push(movieTitle2);
  }

  if (distributor2 === "UNIVERSAL PICTURES") {
    universalPicturesDomesticSales.push(domesticSales);
    universalPicturesHighestGrossingDomesticMovie = Math.max.apply(
      null,
      topMoviesArr
    );
    universalPicturesHighestGrossingDomesticMovie = movieTitle2;
  }
}
// console.log("\nUNIVERSAL PICTURES MOVIES\n", universalPicturesMovies);
// console.log(
//   "\nUNIVERSAL PICTURES DOMESTIC SALES\n",
//   universalPicturesDomesticSales
// );
console.log(
  "\nUNIVERSAL PICTURES HIGHEST GROSSING DOMESTIC MOVIE\n" +
    "🧸" +
    universalPicturesHighestGrossingDomesticMovie +
    "\n"
);

/*
QUESTION 3 OF 5
- What distributor has the most films on this list?
 */
let distributorsDict3 = {};
let allFilms = [];
let distributorWithMostFilms = "";

for (let row of topMoviesArr) {
  let element2 = row.split(",");
  let distributor3 = element2[1];
  let movieTitle3 = element2[0];

  distributorsDict3[distributor3] = movieTitle3;
  // test data access
  // console.log(distributorsDict3);

  // CODE CONDITIONS ETC TO GET OUTPUT
}
console.log("\nDISTRIBUTOR WITH MOST FILMS LISTED\n", distributorWithMostFilms);

/*
QUESTION 4 OF 5       
- What is the earliest year on this list, and what were the films from that year?
 */

/*
QUESTION 5 OF 5        
- What is the distribution of ratings? (How many are PG, PG-13, R, etc.?) 
 */
