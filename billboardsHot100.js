const fs = require("fs");
const billboardStr = fs.readFileSync("billboard100_2000.csv").toString("utf-8");
const billboardArr = billboardStr.split("\n");

/*
QUESTION 1 OF 4
[x] Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
    These were the number one songs of 2000:
    "Try Again" - Aaliyah
    "Say My Name" - Destiny's Child
    "What A Girl Wants" - Christina Aguilera
    "Maria Maria" - Santana Featuring The Product G&B
    "Smooth" - Santana Featuring Rob Thomas
    "Independent Women Part I" - Destiny's Child
*/
const getNumOneSongAndArtistDict = {};

for (let row of billboardArr) {
  let element = row.split(",");
  let rank = element[0];
  let song = element[1];
  let artist = element[2];

  if (rank !== "1") {
    continue;
  } else {
    // can concat directly in key designation for dict
    // getNumOneSongAndArtistDict[song + " - " + artist] = artist;
    getNumOneSongAndArtistDict[song] = artist;
  }
}
// console.log(Object.keys(getNumOneSongAndArtistDict), "\n");
for (let song in getNumOneSongAndArtistDict) {
  //  '"' + '"' <-- string that has double quotes. or escape it
  //  `"${song}" - ${get...}`
  console.log("'" + song + "'" + " - " + getNumOneSongAndArtistDict[song]);
}
console.log("\n");

/*
QUESTION 2 OF 4
[x] What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?

EXPECTED OUTPUT 
dict = {
  numOne: ["song", "artist", "weeksOnBoard"]
}
*/

const getNumOneSongForMostWeeksDict = {};
let biggestCount = 0;
let numOneSong = "";

for (let row of billboardArr) {
  let element = row.split(",");
  let date = element[6];
  let rank = element[0];
  let song = element[1];
  let artist = element[2];
  let weekOnBoard = element[5];

  if (rank !== "1" && !date.includes("2000-")) {
    continue;
  } else {
    // ['song0', 'song0', 'song0', 'song1', 'song2']
    // dict = {song: num++}
    if (getNumOneSongForMostWeeksDict[song] === undefined) {
      getNumOneSongForMostWeeksDict[song] = 0;
    }
    getNumOneSongForMostWeeksDict[song]++;
    if (getNumOneSongForMostWeeksDict[song] > biggestCount) {
      biggestCount = getNumOneSongForMostWeeksDict[song];
      numOneSong =
        song +
        " by " +
        artist +
        " was #1 song for " +
        biggestCount +
        "weeks - the most in year 2000";
    }
  }
}
console.log(numOneSong);
console.log("\n");

/*
QUESTION 3 OF 4
[x] What artist had the most songs chart in 2000, and what were those songs?
*/

// find artist and list all of the artist's songs
// expected output
// dict = {
//  artist: [song, song, song];
// }

// get most songs charted first
// ?de-duplicate the output so song only appears once?
// print just the one artist with the list of their songs
const mostValiantArtistDict = {};
let countDict = {};
let artistWithMostSongs = "";

for (let row of billboardArr) {
  let element = row.split(",");
  let song = element[1];
  let artist = element[2];

  if (mostValiantArtistDict[artist] === undefined) {
    mostValiantArtistDict[artist] = [];
  }
  mostValiantArtistDict[artist].push(song);
}

// count songs for each artist
// compare song count for each artist to get the largest
// by looping over the array containing songs for each artist

let bestArtist = "";
let numSongs = 0;
for (let artist in mostValiantArtistDict) {
  // countDict[artist] = mostValiantArtistDict[artist].length;
  let count = mostValiantArtistDict[artist].length;
  if (count > numSongs) {
    numSongs = count;
    bestArtist = artist;
  }
}
console.log(`${bestArtist} charted ${numSongs} songs in 2000`);
console.log(
  `Those songs, including repeat charts of the same song, are: `,
  mostValiantArtistDict[bestArtist]
);
console.log("\n");

// code above condenses codes below lines 127 to 139
// let bestArtist = "";
// let numSongs = 0;

// for (let key in countDict) {
//   let count = countDict[key];
//   if (count > numSongs) {
//     numSongs = count;
//     bestArtist = key;
//   }
// }
// console.log(numSongs, bestArtist);
// console.log(mostValiantArtistDict);
// console.log("\n");

/*
QUESTION 4 OF 4
[x] What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?
*/
// to debug, figure out how to find correct element in row for weeksOnBoard when have found quotes
// option: ignore lines with quotes (do this first)
let mostWeeksOnBoard = 0;
let mostWeeksOnBoardSong = "";

for (let row of billboardArr) {
  let element = row.split(",");
  let song = element[1];
  let weeksOnBoard = parseInt(element[5]);

  let newSongArr = [];
  let quoteExists = false;
  for (let i = 0; i < element.length; i++) {
    if (element[i].includes('"')) {
      if (quoteExists) {
        quoteExists = false;
        newSongArr.push(element[i]);
      } else {
        quoteExists = true;
      }
    }
    if (quoteExists) {
      newSongArr.push(element[i]);
    }
  }
  if (newSongArr.length > 0) {
    continue;
  }

  // code below is buggy code trying to split then
  // rejoin songs with commas in between their quotes
  // let newSongArr = [];
  // let quoteExists = false;
  // for (let i = 0; i < element.length; i++) {
  //   if (element[i].includes('"')) {
  //     if (quoteExists) {
  //       quoteExists = false;
  //       newSongArr.push(element[i]);
  //     } else {
  //       quoteExists = true;
  //     }
  //   }
  //   if (quoteExists) {
  //     newSongArr.push(element[i]);
  //   }
  // }
  // if (newSongArr.length > 0) {
  //   song = newSongArr.join(",");
  // }
  // console.log({ song });
  // console.log("ELE LEN: ", element.length);
  // console.log({ weeksOnBoard });

  if (weeksOnBoard > mostWeeksOnBoard) {
    mostWeeksOnBoard = weeksOnBoard;
    mostWeeksOnBoardSong = song;
  }
  // count indvidual songs to get the most frequent
}
console.log(
  `Song '${mostWeeksOnBoardSong}' was charted the most with ${mostWeeksOnBoard} appearances (excluding songs with commas in them, of course🥸)`
);
console.log("\n");

// code below includes iterations of trying to defend against
// songs that include commas being split .... still buggy

// let exampleString = '96,"Left, Right, Left",Drama,98,73,13,2000-05-06'.split(
//   ","
// );
// .join(",");
// after split on the commas the array of strings looks like each piece of each element as a separate string/element ... for example:
// [
//   '96',         '"Left',
//   ' Right',     ' Left"',
//   'Drama',      '98',
//   '73',         '13',
//   '2000-05-06'
// ]
// let newSongArr = [];
// let quoteExists = false;

// let song = exampleString[1]; // song is a string "Left
// for (let i = 0; i < exampleString.length; i++) {
//   console.log("EXAMPLE STRING: ", exampleString[i]);
//   console.log({ quoteExists });
//   if (exampleString[i].includes('"')) {
//     if (quoteExists) {
//       quoteExists = false;
//       newSongArr.push(exampleString[i]);
//     } else {
//       quoteExists = true;
//     }
//   }
//   console.log("QUOTE EXISTS AFTER IF STATEMENT: ", quoteExists);
//   if (quoteExists) {
//     newSongArr.push(exampleString[i]);
//   }
// }
// song = newSongArr.join(",");

// '"Left,' + " Right," + ' Left"';
// console.log({ newSongArr });
// console.log({ exampleString });
// console.log({ song });
