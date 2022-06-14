const fs = require("fs");
const billboardArr = fs
  .readFileSync("billboard100_2000.csv")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

/*
[x] Print out all of the #1 songs and the artists who made them. 
    ** print multiple appearances only once
*/
const num1ArtistsAndTheirSongs = {};
for (const row of billboardArr) {
  const element = row.split(",");
  const rank = parseInt(element[0]);
  const song = element[1];
  const artist = element[2];

  if (rank === 1) {
    num1ArtistsAndTheirSongs[artist] = song;
  }
}
console.log("\n", { num1ArtistsAndTheirSongs });

/*
[x] What song was the #1 song for the most weeks of 2000, 
    [x] who was the artist, 
    [x] how many weeks was it at #1?
*/
let weeksSongNum1 = 0;
let artistOfSongNum1MostWeeks;
let num1SongMostWeeks;
const num1SongsObj = {};

for (const row of billboardArr) {
  const element = row.split(",");
  const rank = parseInt(element[0]);
  const song = element[1];
  const artist = element[2];

  // online search results w/Faith Hill Breathe as number 1 song
  // accounting for number 1 rank produces Santana
  // not accounting for rank of 1 outputs Faith Hill
  // this means not accounting for rank tells program to simply tally total occurrences for a song - this is not the same as most ranked #1
  if (rank === 1) {
    if (!num1SongsObj[song]) {
      num1SongsObj[song] = 1;
    } else {
      num1SongsObj[song]++;
    }

    if (num1SongsObj[song] > weeksSongNum1) {
      weeksSongNum1 = num1SongsObj[song];
      artistOfSongNum1MostWeeks = artist;
      num1SongMostWeeks = song;
    }
  }
}
console.log(
  "\nSONG: " +
    num1SongMostWeeks +
    " BY " +
    artistOfSongNum1MostWeeks +
    " FOR " +
    weeksSongNum1 +
    " WEEKS"
);

/*
[x] What artist had the most songs chart in 2000, 
    [x] when allowing repeat occurrences by song, what were those songs? ... array method
    [x] when defending against repeat occurrences by song and instead counting the artist for repeat occurrences, what are the songs? ... obj method
*/
let artistWithMostSongsCharted;
let timesSongsCharted = 0;
let songsCharted = [];
const allSongsChartedObj = {};
const artistWithMostSongsChartedObj = {};

for (const row of billboardArr) {
  const element = row.split(",");
  const artist = element[2];

  if (!allSongsChartedObj[artist]) {
    allSongsChartedObj[artist] = 1;
  } else {
    allSongsChartedObj[artist]++;
  }

  if (allSongsChartedObj[artist] > timesSongsCharted) {
    artistWithMostSongsCharted = artist;
    timesSongsCharted = allSongsChartedObj[artist];
  }
}

for (const row of billboardArr) {
  const element = row.split(",");
  const song = element[1];
  const artist = element[2];

  if (artist === artistWithMostSongsCharted) {
    songsCharted.push(song);
    artistWithMostSongsChartedObj[song] = artist;
  }
}
console.log(
  "\n",
  { artistWithMostSongsCharted },
  { timesSongsCharted },
  { songsCharted }
);
console.log({ artistWithMostSongsChartedObj }, "\n");

/*
[x] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?
*/
const chartedSongsOf2000WithMostWeeksObj = {};
for (const row of billboardArr) {
  const element = row.split(",");
  const song = element[1];

  if (!chartedSongsOf2000WithMostWeeksObj[song]) {
    chartedSongsOf2000WithMostWeeksObj[song] = 1;
  } else {
    chartedSongsOf2000WithMostWeeksObj[song]++;
  }
}

for (const [song, value] of Object.entries(
  chartedSongsOf2000WithMostWeeksObj
)) {
  if (value >= 35) {
    console.log({ song });
  }
}
