function sumOfSquares(vector) {
  return vector.reduce((sum, value) => sum + value ** 2, 0);
}

// Example usage:
let numericVector = [1, 2, 3, 4, 5];
let result = sumOfSquares(numericVector);
console.log(result); // Output: 55
