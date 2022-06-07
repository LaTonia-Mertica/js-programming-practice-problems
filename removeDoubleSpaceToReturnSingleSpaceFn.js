/*
Create fn to replace double spaces in a string with single spaces
*/
function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ");
}
// note this is not a great solution given the spacing must be exact
// and various chars impact ultimate output/implementation
console.log(convertDoubleSpaceToSingle("LA'TONIA  MERTICA"));

function convertNonSingleSpacesToSingle(str) {
  return str.split(" ").join("");
}
console.log(convertNonSingleSpacesToSingle("HA  PPY"));
