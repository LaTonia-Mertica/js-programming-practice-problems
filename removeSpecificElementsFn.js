/*
Create fn that removes specific values from object
*/
function removeSpecificElements(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
  return obj;
}
console.log(removeSpecificElements({ 1: 1, 2: "two", three: [9, 8, 7, 6, 5] }));

function removeSpecificDataShapeElements(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      if (Array.isArray(obj[key]) === false) {
        delete obj[key];
      }
    }
  }
  return obj;
}
console.log(
  removeSpecificDataShapeElements({ 1: 1, 2: "two", 3: [9, 8, 7, 6, 5] })
);
