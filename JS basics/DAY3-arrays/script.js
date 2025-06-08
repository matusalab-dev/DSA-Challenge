function getSecondLargest(nums) {
  // Complete the function
  let ayida = [...new Set(nums)];
  ayida.sort((a, b) => b - a);

  if (ayida.length < 2) {
    console.log("Array does not have enough unique elements");
  } else {
    console.log(ayida[1]);
  }
}
