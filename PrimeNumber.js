// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) { // Check divisibility from 2 to the square root of the number
        if (num % i === 0) {
            return false; // If divisible, it's not prime
        }
    }
    return true; // If no divisors, it's prime
}

// Generate an array of prime numbers from 1 to 100
function generatePrimeNumbers() {
    let primeNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i); // Add the prime number to the array
        }
    }
    return primeNumbers;
}

let primes = generatePrimeNumbers();
console.log("Prime numbers from 1 to 100:", primes);

/////////////////////////////////////////////////////////

function generatePrimes() {
  let primes = [];

  for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  return primes;
}

console.log(generatePrimes())

//////////////////////////////////////////////////////////////

let n = 3;
function isPrime(n){
    
    if(n<=1){
        return false
    }
    for(let i=2; i< Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
     return true
}

let res2 = isPrime(n)
console.log(res2)
