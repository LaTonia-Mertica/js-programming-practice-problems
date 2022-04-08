/*
- if grade is less than zero or greater than 100 
  return invalid grade
- A is grade between 90 and 100
- B is grade between 80 and 89
- C is grade between 70 and 79
- D is grade between 60 and 69
- F is grade between 0 and 59

this can be done with an if/else OR switch statement
if/else statement may be simpler/easier option
if do this question using switch, remember to include breaks
*/

function convertNumGradeToLetterGrade(grade) {
  if (grade < 0 || grade > 100) {
    console.log("Invalid Grade");
  } else if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
convertNumGradeToLetterGrade(97);
