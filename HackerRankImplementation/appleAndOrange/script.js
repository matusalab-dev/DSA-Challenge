/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let countApples = 0;
  let countOranges = 0;

  // for(let i =0; i<apples.length; i++){
  //     if(a+apples[i] >= s && a+apples[i] <= t){
  //         countApples++;
  //     }
  // }
  // for(let i =0; i<oranges.length; i++){
  //     if(b+oranges[i] >= s && b+oranges[i] <= t){
  //         countOranges++;
  //     }
  // }

  apples.forEach(function (Avalue) {
    if (a + Avalue >= s && a + Avalue <= t) {
      countApples++;
    }
  });
  oranges.forEach(function (Ovalue) {
    if (b + Ovalue >= s && b + Ovalue <= t) {
      countOranges++;
    }
  });
  console.log(countApples);
  console.log(countOranges);
}
