/*
Create fn to get an index without using the built-in method indexOf()
*/
function getIndexWithoutIndexofMethod(char, str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  // if leave out the below return statement undefined outputs for chars not in the string
  // when using indexOf negative one -1 outputs
  // returning -1 below provides more/familiar clarity aka confirmation when the char is not found
  return -1;
}
// note the apostrophe and empty space are counted
// this would be a better output after account for invalid chars
console.log(getIndexWithoutIndexofMethod("R", "LA'TONIA MERTICA"));
