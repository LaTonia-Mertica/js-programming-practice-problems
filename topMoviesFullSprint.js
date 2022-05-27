// file system to access and read data from provided source
const fs = require("fs");
const filmStrings = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const filmArray = filmStrings.split("\r\n");

/* What is the highest grossing domestic movie from Universal Pictures? */
function getHighestGrossingDomesticMovieFromUniversalPictures() {
  const distributorDict = {
    distributor: "",
    domSales: 0,
    film: "",
  };

  for (const row of filmArray) {
    const element = row.split(",");
    const title = element[0];
    const distributor = element[1];
    const domesticSales = parseInt(element[3]);

    if (
      distributor === "UNIVERSAL PICTURES" ||
      distributor.includes("UNIVERSAL")
    ) {
      if (distributorDict.domSales < domesticSales) {
        distributorDict.domSales = domesticSales;
        distributorDict.distributor = distributor;
        distributorDict.film = title;
      }
    }
  }
  return distributorDict;
}
console.log(
  "\nHIGHEST GROSSING DOMESTIC FILM BY UNIVERSAL PICTURES",
  getHighestGrossingDomesticMovieFromUniversalPictures()
);

/* What distributor has the most films on this list? */
function getDistributorWithMostListedFilms() {
  const distributorFilmCountDict = {};
  let distributorWithMostFilmsOnTheList;
  let distributorFilmCount = 0;

  for (const row of filmArray) {
    const element = row.split(",");
    const distributor = element[1];

    if (distributorFilmCountDict[distributor] === undefined) {
      distributorFilmCountDict[distributor] = 1;
    } else {
      distributorFilmCountDict[distributor]++;
    }

    if (distributorFilmCount < distributorFilmCountDict[distributor]) {
      distributorFilmCount = distributorFilmCountDict[distributor];
      distributorWithMostFilmsOnTheList = distributor;
    }
  }
  return (
    distributorWithMostFilmsOnTheList +
    " HAS THE MOST RELEASES WITH " +
    distributorFilmCount +
    " FILMS LISTED!"
  );
}
console.log("\n", getDistributorWithMostListedFilms());

/* What is the earliest year on this list, and what were the films from that year? */
function getEarliestYearAndFilms() {
  let earliestFilm;
  let earliestYear;
  let allEarliestFilms = [];

  for (const row of filmArray) {
    const element = row.split(",");
    const title = element[0];
    const year = parseInt(element[2]);

    if (!earliestYear || year < earliestYear) {
      earliestYear = year;
      earliestFilm = title;
      allEarliestFilms = [title];
    } else if (year === earliestYear) {
      allEarliestFilms.push(title);
    }
  }
  return (
    earliestYear +
    " IS THE EARLIEST YEAR, DURING WHICH: " +
    allEarliestFilms +
    " RELEASED!"
  );
}
console.log("\n", getEarliestYearAndFilms());

/* What movies on this list were distributed by DreamWorks? */
function getMoviesByDistributor() {
  const specifiedDistributorArray = [];

  for (const row of filmArray) {
    const element = row.split(",");
    const title = element[0];
    const distributor = element[1];

    if (distributor.includes("DREAM")) {
      specifiedDistributorArray.push(title);
    }
  }
  return specifiedDistributorArray;
}
console.log("\nDREAMWORKS FILMS", getMoviesByDistributor());

/* Program a function to get movies on this list distributed by year */
function getFilmsByYear(filmYear) {
  const filmsByYear = [];
  for (const row of filmArray) {
    const element = row.split(",");
    const title = element[0];
    const year = parseInt(element[2]);

    if (filmYear === year) {
      filmsByYear.push(title);
    }
  }
  return filmsByYear;
}
console.log("\nYEAR 2013", getFilmsByYear(2013));
