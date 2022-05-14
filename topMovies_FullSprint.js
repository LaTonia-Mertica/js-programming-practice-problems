// arrange file system to read and access data from provided sources
const fs = require("fs");
const movieStrings = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const movieArray = movieStrings.split("\r\n");

/* [x] What is the highest grossing domestic movie from Universal Pictures? */
function getTopMovieInfo() {
  // declare variable assigned to number for highest grossing
  let highestDomesticSalesAmount = 0;
  // declare variable un-assigned for movie
  let movieWithHighestDomesticSales;
  // for of loop to access each row in movie array
  for (const row of movieArray) {
    // declare variable to split each element in row on comma
    const element = row.split(",");
    // declare variable for title
    const title = element[0];
    // declare variable for distributor
    const distributor = element[1];
    // declare variable for sales and parse it as an integer
    const domesticSales = parseInt(element[3]);

    // if statement to get distributor of dreamworks only
    // and to check if sales are larger than the variable declared for highest grossing
    if (
      distributor.includes("UNIVERSAL") &&
      domesticSales > highestDomesticSalesAmount
    ) {
      // when criteria of if statement met
      // re-assign highest amount to sales
      // re-assign movie variable to title
      highestDomesticSalesAmount = domesticSales;
      movieWithHighestDomesticSales = title;
    }
  }
  // return needed output
  return movieWithHighestDomesticSales;
}
// console log the function to get output from return statement
console.log(getTopMovieInfo());

/* [x] What distributor has the most films on this list? */
function getMostProlificDistributor() {
  // declare variable to empty dictionary/object
  const distributorsDict = {};
  // declare un-assigned variable for distributor
  let mostProlificDistributor;
  // declare variable for count assigned to number
  let distributionCount = 0;

  // for of loop to access each row in movie array
  for (const row of movieArray) {
    // variable to split each element in each row by comma
    const element = row.split(",");
    // variable for distributor from split movie array
    const distributor = element[1];

    // if statement to determine if the dict/obj at key of distributor is undefined
    if (!distributorsDict[distributor]) {
      // when dict/obj at key of distributor is undefined assign it a value of number 1
      distributorsDict[distributor] = 1;
    } else {
      // otherwise increase the assigned value by one for each distributor
      distributorsDict[distributor]++;
    }

    // inner for in loop to access each key in the dict/obj
    for (const key in distributorsDict) {
      // if statement to check if the dict/obj at each key is larger than the current count
      if (distributorsDict[key] > distributionCount) {
        // when the dict/obj at each key is larger than the current count re-assign the count to the dict/obj at the key
        distributionCount = distributorsDict[key];
        //re-assign the distributor variable to the distributor element split in the array
        mostProlificDistributor = distributor;
      }
    }
  }
  // return needed output
  return mostProlificDistributor;
}
// console log the function
console.log(getMostProlificDistributor());
//console.log({ mostProlificDistributor });

/*
[x] What is the earliest year on this list, and what were the films from that year?
*/
function getMoviesReleasedInEarliestYear() {
  // variable for year needed that is not assigned a value
  let earliestYear;
  // variable for movie needed that is not assigned a value
  let earliestMovie;
  let listOfEarliestMovies = [];

  // for of loop to access each row in the movie array
  for (const row of movieArray) {
    // variable to split elements in each row on each comma
    const element = row.split(",");
    // variable to access each title from split array
    const title = element[0];
    // variable to access each year from split array
    const year = parseInt(element[2]);

    // if statement to check if the year sought is undefined
    // or if the year from the split array is less than the variable year
    if (!earliestYear || year < earliestYear) {
      // when either of these criteria is met then re-assign the year variable to year from split array
      earliestYear = year;
      // and also re-assign the movie variable to the title from the split array
      earliestMovie = title;
      listOfEarliestMovies = [title];
    } else if (year === earliestYear) {
      listOfEarliestMovies.push(title);
    }
  }
  // return needed output
  // get fancy as needed
  return (
    "\nEARLIEST YEAR: " +
    earliestYear +
    "\nMOVIE TITLE: " +
    earliestMovie +
    "\nLIST OF EARLIEST MOVIES: " +
    listOfEarliestMovies
  );
}
// console log function to get outpur from return statement
console.log(getMoviesReleasedInEarliestYear());
// console.log({ earliestYear });
// console.log({ earliestMovie });

/* [x] What movies on this list were distributed by DreamWorks? */
const getDreamworksMovies = () => {
  // variable assigned empty array to store movies that meet criteria
  const dreamworksMovies = [];
  // for of loop to access each row in movie array
  for (const row of movieArray) {
    // variable to split each element in each row in movie array
    const element = row.split(",");
    // variable to access each title in each row in split array
    const title = element[0];
    // variable to access each distributor in each row in split movie array
    const distributor = element[1];

    // if statement to check if distributor is the one needed
    if (distributor.includes("DREAMWORKS")) {
      // add title to array if distributor is the one needed
      dreamworksMovies.push(title);
    }
  }
  // return output needed
  return dreamworksMovies;
};
// console log function
// get fancy in the console log as needed
console.log("\nDREAMWORKS MOVIES: ", getDreamworksMovies());
// console.log({ dreamworksMovies });
// console.log(dreamworksMovies.length);

/* [x] Program a function to get movies on this list distributed by year */
// create fn with descriptive parameter for info sought
function getMoviesBySpecifiedData(releaseDate) {
  // variable to store info sought
  const soughtMovies = [];
  // for of loop to access each row in movie array
  for (const row of movieArray) {
    // variable to split each element in each row in movie array
    const element = row.split(",");
    // variable to access each title in each row in movie array
    const title = element[0];
    // variable to access each year in each row in movie array
    const year = parseInt(element[2]);

    // if statement to check if release date and year split from movie array match
    if (releaseDate === year) {
      // add title to variable created to store info when its release date matches the year split from the row in the movie array
      soughtMovies.push(title);
    }
  }
  // return info needed for output
  return (
    "\nIN " +
    releaseDate +
    " THE FOLLOWING MOVIES WERE RELEASED: " +
    soughtMovies +
    "\n"
  );
}
// console log function
console.log(getMoviesBySpecifiedData(2013));
