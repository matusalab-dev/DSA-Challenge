/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  // Write your code here
  let minRecord = scores[0];
  let maxRecord = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < minRecord) {
      minRecord = scores[i];
      minCount++;
    } else if (scores[i] > maxRecord) {
      maxRecord = scores[i];
      maxCount++;
    }
  }

  return [maxCount, minCount];
}
