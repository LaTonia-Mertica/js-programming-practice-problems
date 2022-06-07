/*
Create fn to remove an element using splice
*/
function removeItemUsingSplice(string, start, end) {
  const subString = string.substring(start, end);
  return "PART OF STRING REMOVED: " + subString;
}
console.log(
  removeItemUsingSplice(
    "My goal is full competency in JS and Python with specialization in design.",
    0,
    30
  )
);
