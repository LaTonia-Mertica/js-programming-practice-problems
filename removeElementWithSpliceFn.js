/*
Create fn to remove item using splice

note this method will not remove the item from the front (unshift)
or from the back (shift) of the array
*/
function removeItemUsingSplice(arr, idx) {
  // removes item at index 2
  // only removes 1 item
  arr.splice(2, 1);
  return arr;
}
console.log(removeItemUsingSplice([0, 1, 2, 3, 4, 5]));
