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

    - need rank
    - need song
    - need artist
    - data structure: makes sense to use object aka dict
*/
const num1SongWithArtistObj = {};
for (const row of billboardArr) {
  const element = row.split(",");
  const rank = parseInt(element[0]);
  const song = element[1];
  const artist = element[2];

  if (rank === 1) {
    if (!num1SongWithArtistObj[artist]) {
      num1SongWithArtistObj[artist] = song;
    }
  }
}
console.log({ num1SongWithArtistObj });

/*
[x] What song was the #1 song for the most weeks of 2000, 
    [x] who was the artist, 
    [x] how many weeks was it at #1?

    - need rank
    - need tally of weeks song num 1
    - need song
    - need artist
*/
let mostWeeks = 0;
let num1SongMostWeeks;
let artistOfSongNum1MostWeeks;
const num1SongTalliesBySongObj = {};

for (const row of billboardArr) {
  const element = row.split(",");
  const rank = parseInt(element[0]);
  const song = element[1];
  const artist = element[2];

  if (rank === 1) {
    if (!num1SongTalliesBySongObj[song]) {
      num1SongTalliesBySongObj[song] = 1;
    } else {
      num1SongTalliesBySongObj[song]++;
    }
  }

  if (num1SongTalliesBySongObj[song] > mostWeeks) {
    mostWeeks = num1SongTalliesBySongObj[song];
    num1SongMostWeeks = song;
    artistOfSongNum1MostWeeks = artist;
  }
}
console.log(
  { num1SongMostWeeks },
  { mostWeeks },
  { artistOfSongNum1MostWeeks }
);

/*
[x] What artist had the most songs chart in 2000, 
    [x] when allowing repeat occurrences by song, what were those songs? ... array method
    [x] when defending against repeat occurrences by song and instead counting the artist for repeat occurrences, what are the songs? ... obj aka dict method

    - need songs
    - need tally of songs by artist
    - need artist
*/
let numSongsCharted = 0;
let mostChartedArtist;
const songsByMostChartedArtistArr = [];
const songsByMostChartedArtistObj = {};
const mostChartedArtistObj = {};

for (const row of billboardArr) {
  const element = row.split(",");
  const song = element[1];
  const artist = element[2];

  if (!songsByMostChartedArtistObj[artist]) {
    songsByMostChartedArtistObj[artist] = 1;
  } else {
    songsByMostChartedArtistObj[artist]++;
  }

  if (songsByMostChartedArtistObj[artist] > numSongsCharted) {
    numSongsCharted = songsByMostChartedArtistObj[artist];
    mostChartedArtist = artist;
  }

  if (artist === "FAITH HILL") {
    songsByMostChartedArtistArr.push(song);
  }
}
// array method
console.log({ mostChartedArtist }, { songsByMostChartedArtistArr });

// obj aka dict method
for (const song of songsByMostChartedArtistArr) {
  if (!mostChartedArtistObj[song]) {
    mostChartedArtistObj[song] = mostChartedArtist;
  }
}
console.log({ mostChartedArtistObj });

/*
[x] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

- need song
- need tally of times song charted
note: may be able to use most weeks on board instead of tally
*/
const chartedSongsObj = {};
const topChartedSongsObj = {};
for (const row of billboardArr) {
  const element = row.split(",");
  const song = element[1];

  if (song === "SONG" || song === "") {
    continue;
  }

  if (!chartedSongsObj[song]) {
    chartedSongsObj[song] = 1;
  } else {
    chartedSongsObj[song]++;
  }
  if (chartedSongsObj[song] > 25) {
    topChartedSongsObj[song] = "🎵";
  }
}
console.log(topChartedSongsObj);
