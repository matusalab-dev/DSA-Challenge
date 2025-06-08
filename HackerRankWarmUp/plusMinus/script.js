/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let negative = 0;
  let positive = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      zero++;
    }
  }
  console.log(positive / arr.length.toFixed(6));
  console.log(negative / arr.length.toFixed(6));
  console.log(zero / arr.length.toFixed(6));
}
