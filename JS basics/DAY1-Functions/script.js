function factorial(n) {
  let product = 1;
  if (n == 0 || n == 1) {
    return 1;
  }
  if (n > 1) {
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
  }
}
