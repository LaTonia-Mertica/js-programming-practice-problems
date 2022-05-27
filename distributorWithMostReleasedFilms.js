/*
- What distributor has the most films on this list?
*/
const fs = require("fs");
const filmStr = fs
  .readFileSync("top_movies.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const filmArr = filmStr.split("\r\n");

function getDistributorWithMostReleasedFilms() {
  const distributorDistributions = {};
  let distributorWithMostReleasedFilms;
  let distributorDistributionsCount = 0;

  for (const row of filmArr) {
    const element = row.split(",");
    let distributor = element[1];
    if (distributorDistributions[distributor] === undefined) {
      distributorDistributions[distributor] = 1;
    } else {
      distributorDistributions[distributor]++;
    }
    if (distributorDistributions[distributor] > distributorDistributionsCount) {
      distributorDistributionsCount = distributorDistributions[distributor];
      distributorWithMostReleasedFilms = distributor;
    }
  }
  return (
    distributorWithMostReleasedFilms +
    " WITH " +
    distributorDistributionsCount +
    " RELEASED FILMS!"
  );
}
console.log(getDistributorWithMostReleasedFilms());
