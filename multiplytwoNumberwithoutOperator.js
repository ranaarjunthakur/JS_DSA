
function multiply(x, y) {
  let result = 0;
  const positive = Math.abs(y);
  
  for (let i = 0; i < positive; i++) {
    result += x;
  }
  return y < 0 ? -result : result;  
}

console.log(multiply(2,3))


//////////////////////////////////adding////////////////////////


function add(a, b) {
  while (b !== 0) {
    let carry = a & b;        // Common bits (carry)
    a = a ^ b;                // Sum without carry
    b = carry << 1;           // Carry shifted to correct position
  }
  return a;
}

// Examples
console.log(add(5, 3));    // 8
console.log(add(-5, 3));   // -2
console.log(add(5, -3));   // 2
console.log(add(-5, -3));  // -8
