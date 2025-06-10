var getConcatenation = function (nums) {
  let ans = [];
  n = nums.length;
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  return ans;
};
