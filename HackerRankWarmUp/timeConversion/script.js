/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let time = s.slice(0, -2);
  let splitedTime = time.split(":"); // [19, 05, 45]
  let hours = parseInt(splitedTime[0]);
  let period = s.slice(-2);

  // Convert the hour part
  if (period === "AM") {
    if (hours === 12) {
      hours = 0;
    }
  } else if (period === "PM") {
    if (hours !== 12) {
      hours += 12;
    }
  }
  splitedTime[0] = hours.toString().padStart(2, "0");
  return splitedTime.join(":");
}
