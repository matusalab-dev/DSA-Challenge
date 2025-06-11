var calPoints = function (operations) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    if (!isNaN(operations[i])) {
      arr.push(parseInt(operations[i]));
    }
    if (operations[i] == "+") {
      let newScore = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(newScore);
    }
    if (operations[i] == "D") {
      let newScore = arr[arr.length - 1] * 2;
      arr.push(newScore);
    }
    if (operations[i] == "C") {
      arr.pop();
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
