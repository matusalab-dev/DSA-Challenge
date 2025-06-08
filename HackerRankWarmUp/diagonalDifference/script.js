/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let Fsum = 0;
  let Ssum = 0;

  for (let i = 0; i < arr.length; i++) {
    Fsum += arr[i][i];
    Ssum += arr[i][arr.length - 1 - i];
  }

  let difference = Fsum - Ssum;
  return Math.abs(difference);
}
