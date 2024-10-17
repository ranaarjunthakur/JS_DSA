function sumOfSquares(vector) {
  return vector.reduce((sum, value) => sum + value ** 2, 0);
}

// Example usage:
let numericVector = [1, 2, 3, 4, 5];
let result = sumOfSquares(numericVector);
console.log(result); // Output: 55


//////////////////////////////////////////////

let arr=[1,2,3,4,5]

function sumofSquare(arr){
  
  let sum=0;
  
  for(let val of arr){
    sum +=val*val
  }
  return sum
}

console.log(sumofSquare(arr))
