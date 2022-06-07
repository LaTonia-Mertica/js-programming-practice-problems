/*
Create fn to count number of keys in an object
*/

function countObjKeys(obj) {
  let keyCount = 0;
  for (const key in obj) {
    keyCount++;
  }
  return keyCount;
}
console.log(
  countObjKeys({
    uno: "🥸",
    dos: "🥸🥸",
    tres: "🥸🥸🥸",
    cuatro: "🥸🥸🥸🥸",
    cinco: "🥸🥸🥸🥸🥸",
    seis: "🥸🥸🥸🥸🥸🥸",
    siete: "🥸🥸🥸🥸🥸🥸🥸",
  })
);
