/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  for (let i = 1; i < 10000; i++) {
    if (i * v1 + x1 === i * v2 + x2) {
      return "YES";
    }
  }
  return "NO";
}
