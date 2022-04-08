/*
Convert number grade to letter grade with plus or minus

- if grade is less than 0 or greater than 100 console log invalid grade
- grades that are between 0 and 2 receive a minus
- grades that are greater than or equal to 8 receive a plus

- grade A is 90 to 100
- grade B is 80 to 89
- grade C is 70 to 79
- grade D is 60 to 69
- grade F is 0 to 59
*/

function convertNumGradeToLetterGradeWithPlusOrMinus(grade) {
  if (grade > 100 || grade < 0) {
    console.log("Invalid Grade");
  } else if (grade <= 69) {
    if (grade <= 62) {
      console.log("D-");
    } else if (grade >= 68) {
      console.log("D+");
    } else {
      console.log("D");
    }
  } else if (grade <= 79) {
    if (grade <= 72) {
      console.log("C-");
    } else if (grade >= 78) {
      console.log("C+");
    } else {
      console.log("C");
    }
  } else if (grade <= 89) {
    if (grade <= 82) {
      console.log("B-");
    } else if (grade >= 88) {
      console.log("B+");
    } else {
      console.log("B");
    }
  } else if (grade <= 100) {
    if (grade <= 92) {
      console.log("A-");
    } else if (grade >= 98) {
      console.log("A+");
    } else {
      console.log("A");
    }
  }
}
convertNumGradeToLetterGradeWithPlusOrMinus(87);
