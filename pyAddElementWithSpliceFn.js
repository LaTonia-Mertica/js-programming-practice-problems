/*
Create fn to add an element using splice

note that this will not add to the front (unshift) or back (shift)
and adds without replacing anything in the array
*/
function addElementToArrayWithSplice(nums, idx, elem) {
  // passing to splice method below
  // the index for where to add the element
  // THEN which index to replace ... in this case replace none
  // THEN the number to add at that index
  nums.splice(0, 0, 0);
  return nums;
}
console.log(addElementToArrayWithSplice([2, 4, 8, 12, 16, 20, 24], 0, 0));
