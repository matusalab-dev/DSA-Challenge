/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = Math.max(...candles);
  let blownCandles = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == max) {
      blownCandles++;
    }
  }
  return blownCandles;
}
