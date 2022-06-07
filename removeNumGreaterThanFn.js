/*
Create fn to remove number(s) with greater value than value of target

- iterate object
- delete value when value is a number and greater than input number 
*/
function removeNumGreaterThanTarget(num, obj) {
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "number" && value > num) {
      delete obj[key];
    }
    return "REMAINING AFTER DELETE: " + value;
  }
}
// note this only deletes the first occurrence that meets criteria
console.log(removeNumGreaterThanTarget(1, { 3: "👌", 2: "😋" }));
console.log(removeNumGreaterThanTarget(2, { 0: "👌", 4: "😋" }));
