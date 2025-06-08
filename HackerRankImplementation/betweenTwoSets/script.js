/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here

  const gcd = (x, y) => {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  };

  const lcm = (x, y) => {
    return (x * y) / gcd(x, y);
  };

  // Find LCM of array a
  let lcmA = a[0];
  for (let i = 1; i < a.length; i++) {
    lcmA = lcm(lcmA, a[i]);
  }

  // Find GCD of array b
  let gcdB = b[0];
  for (let i = 1; i < b.length; i++) {
    gcdB = gcd(gcdB, b[i]);
  }

  // Count the numbers between arrays
  let count = 0;
  for (let i = lcmA; i <= gcdB; i += lcmA) {
    if (gcdB % i === 0) {
      count++;
    }
  }

  return count;
}
