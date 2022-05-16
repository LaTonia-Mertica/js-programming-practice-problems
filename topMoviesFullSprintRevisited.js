const fs = require("fs");
const movieStr = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const movieArr = movieStr.split("\r\n");

/* What is the highest grossing domestic movie from Sony Pictures Entertainment? */
const domesticMovieWithHighestSales = {
  highestSalesMovie: "",
  highestDomesticSales: 0,
};

for (const row of movieArr) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  const domesticSales = parseInt(element[3]);

  if (distributor.includes("SONY")) {
    if (domesticSales > domesticMovieWithHighestSales["highestDomesticSales"]) {
      domesticMovieWithHighestSales["highestDomesticSales"] = domesticSales;
      domesticMovieWithHighestSales["highestSalesMovie"] = title;
    }
  }
}
console.log({ domesticMovieWithHighestSales });

/* What distributor has the most films on this list? */
const prolificestMoviemakerDict = {};

for (const row of movieArr) {
  const element = row.split(",");
  const distributor = element[1];

  if (prolificestMoviemakerDict[distributor] === undefined) {
    prolificestMoviemakerDict[distributor] = 1;
  } else {
    prolificestMoviemakerDict[distributor]++;
  }
}

let prolificMoviemaker = "";
let prolificestCount = 0;

for (const key in prolificestMoviemakerDict) {
  if (typeof prolificMoviemaker === "string") {
    prolificMoviemaker = key;
  }
  if (prolificestMoviemakerDict[key] > prolificestCount) {
    prolificestCount = prolificestMoviemakerDict[key];
    // erroring per title breaks on comma?
    distributorWithMostFilms = prolificMoviemaker;
  }
}
console.log({ prolificMoviemaker });

/* What is the earliest year on this list, and what were the films from that year? */
let earliestYear = 1000000000;
const earliestFilms = {};

for (const row of movieArr) {
  const element = row.split(",");
  const year = element[2];
  let title = element[0];

  if (!(year in earliestFilms)) {
    earliestFilms[year] = [];
  }
  earliestFilms[year].push(title);
}

for (let year in earliestFilms) {
  if (typeof year === "string") {
    year = parseInt(year);
  }
  if (year < earliestYear) {
    earliestYear = year;
  }
}
console.log(`${earliestYear}: ${earliestFilms[earliestYear]}`);

/* What movies on this list were distributed by DreamWorks? */
let moviesByDreamworks = [];
for (const row of movieArr) {
  const element = row.split(",");
  const title = element[0];
  const distributor = element[1];
  if (distributor.includes("DREAM")) {
    moviesByDreamworks.push(title);
  }
}
console.log({ moviesByDreamworks });

/* Program a function to get movies on this list distributed by year */
