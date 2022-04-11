/*
Convert number grade to pass or fail

- passing grade is at least 61
- failing grade is less than or equal to 60

- we should defend against grades outside the scope of typical 0-100

note: function may have more than one return statement, if coded
correctly, for this challenge I chose to convert returns to console logs
*/

function convertNumGradeToPassOrFail(grade) {
  if (grade < 0 || grade > 100) {
    console.log("Invalid Grade!");
  } else if (grade > 60) {
    console.log("PASSED!");
  } else if (grade <= 60) {
    console.log("FAILED!");
  }
}
convertNumGradeToPassOrFail(90);
