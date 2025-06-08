/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => {
    return b - a;
  }); // 9,7,5,3,2,1
  let minSum = 0;
  let maxSum = 0;
  for (let i = 1; i < arr.length; i++) {
    minSum += arr[i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    maxSum += arr[i];
  }
  console.log(minSum + " " + maxSum);
}
