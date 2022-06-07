/*
Create fn to add items to the front of an array using splice
*/
function addToFrontOfNewArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}
console.log(addToFrontOfNewArray(["JS", "Code", "World", "!"], "Hello"));
