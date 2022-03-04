// global use content next three const statements
// require fs
const fs = require("fs");
// convert data to strings
const topMoviesStr = fs.readFileSync("top_movies.csv").toString("utf-8");
// separate data in strings by commas
// const topMoviesArr = topMoviesStr.trim().toUpperCase().split("\r\n");
const topMoviesArr = topMoviesStr.toUpperCase().split("\r\n");

/*
QUESTION 1 OF 5
- What movies on this list were distributed by DreamWorks? 
 */
let dreamWorksMovies = [];

for (let row of topMoviesArr) {
  let element = row.split(",");
  let movieTitle = element[0];
  let distributor = element[1];
  // confirm datatype
  // console.log(typeof distributor);

  if (distributor.includes("DREAMWORKS")) {
    dreamWorksMovies.push(movieTitle);
  }
}
console.log(
  "\nMOVIES DISTRIBUTED BY DREAMWORKS INCLUDES CODE\n",
  dreamWorksMovies
);

/*
QUESTION 2 OF 5
- What is the highest grossing moving from Universal Pictures, domestically?
 */
const highestGrossingDomesticMovie = {
  sales: 0,
  movieTitle: "",
};

for (let row of topMoviesArr) {
  let element = row.split(",");
  let distributor = element[1];
  let movieTitle = element[0];
  let domesticSales = parseInt(element[3]);

  if (distributor === "UNIVERSAL PICTURES") {
    if (domesticSales > highestGrossingDomesticMovie.sales) {
      highestGrossingDomesticMovie.sales = domesticSales;
      highestGrossingDomesticMovie.movieTitle = movieTitle;
    }
  }
}
console.log(
  "\nUNIVERSAL PICTURES HIGHEST GROSSING DOMESTIC MOVIE\n" +
    "🦖" +
    highestGrossingDomesticMovie.movieTitle +
    " 🌍" +
    "\n"
);

/*
QUESTION 3 OF 5
- What distributor has the most films on this list?
 */
let distributorsDict = {};
let countOfFilmsByDistributor = 0;

for (let row of topMoviesArr) {
  let element = row.split(",");
  let distributor = element[1];
  let movieTitle = element[0];

  // pseudocode for expected output
  // read distributor and add them to dict if not in dict already
  // otherwise increment distributor count by one for each count
  // output the distributor who has hightest count
  // dict = {
  //  distributor: 37
  //}

  if (distributorsDict[distributor] === undefined) {
    distributorsDict[distributor] = 1;
  } else {
    distributorsDict[distributor]++;
  }
}

let largestDistributor = "";
let largestDistributorCount = 0;
for (let key in distributorsDict) {
  if (typeof largestDistributor === "string") {
    largestDistributor = key;
  }
  if (distributorsDict[key] > largestDistributorCount) {
    largestDistributorCount = distributorsDict[key];
    distributorWithMostFilms = largestDistributor;
  }
}
console.log(
  "\nDISTRIBUTOR WITH MOST FILMS LISTED\n" + "🎥" + distributorWithMostFilms
);

/*
QUESTION 4 OF 5       
- What is the earliest year on this list, and what were the films from that year?
 */
// expected output
// const filmsFromEarliestYearListed = {
//   earliestYearAsNumber: ["movie0", "movie1", "movie2"],
// };

let earliestYearListed = 9999;
const filmsFromEarliestYearListed = {};
let specifiedYear = "1975";

for (let row of topMoviesArr) {
  let element = row.split(",");
  let year = element[2];
  let film = element[0];

  if (!(year in filmsFromEarliestYearListed)) {
    filmsFromEarliestYearListed[year] = [];
  }
  filmsFromEarliestYearListed[year].push(film);
}

for (let year in filmsFromEarliestYearListed) {
  // test data access
  // console.log(year);
  // console.log(filmsFromEarliestYearListed[year]);
  if (typeof year === "string") {
    year = parseInt(year);
  }
  if (year < earliestYearListed) {
    earliestYearListed = year;
  }
}
console.log(
  "\nEARLIEST YEAR LISTED: ",
  earliestYearListed +
    "👸" +
    "\n" +
    "film from earliest year listed\n*******************************\n" +
    filmsFromEarliestYearListed[earliestYearListed]
);
console.log(
  "\nSPECIFIED YEAR: ",
  specifiedYear +
    "\n" +
    "film(s) from specified year \n*******************************\n" +
    filmsFromEarliestYearListed[specifiedYear] +
    "🦈" +
    "\n"
);

/*
QUESTION 5 OF 5        
- What is the distribution of ratings? (How many are PG, PG-13, R, etc.?) 
 */
