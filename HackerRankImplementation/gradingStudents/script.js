/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  return grades.map(function (grade) {
    if (grade < 38 || grade % 5 === 0) {
      return grade;
    } else {
      let remainder = grade % 5;
      if (remainder < 3) {
        return grade;
      } else {
        return grade + (5 - remainder);
      }
    }
  });
}
