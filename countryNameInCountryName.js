/*
- find country names that contain other country names

PSEUDOCODE
- file system
- outer for loop through country arr
- inner for loop through same country arr
- check if country names match
- check if one has other in it
- log
*/

const fs = require("fs");
const countryArr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");
// console.log({ countryArr });

const countryNameInOtherCountryName = [];
const countryNameWithCountryNameInIt = [];

// for (const bigCountry of countryArr) {
//   for (const lilCountry of countryArr) {
//     if (bigCountry == lilCountry) {
//       break;
//     } else if (bigCountry.includes(lilCountry)) {
//       countryNameInOtherCountryName.push(lilCountry);
//       countryNameWithCountryNameInIt.push(bigCountry);
//     }
//   }
//}

countryArr.forEach((bigC) => {
  countryArr.forEach((lilC) => {
    if (bigC !== lilC) {
      if (bigC.includes(lilC)) {
        countryNameInOtherCountryName.push(lilC);
        countryNameWithCountryNameInIt.push(bigC);
      }
    }
  });
});
console.log(
  { countryNameInOtherCountryName },
  { countryNameWithCountryNameInIt }
);
