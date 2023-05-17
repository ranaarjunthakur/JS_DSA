
// find first missing number in this array //


const input = [5, 7, 9, 11, 15, 17, 19];

function findMissingOddNumbers(arr) {
  const missingNumbers = [];
  const min = Math.min(...arr); => 5
  const max = Math.max(...arr);  => 19
  

  for (let i = min; i <= max; i++) {
    if (i % 2 !== 0 && !arr.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

const missingOddNumbers = findMissingOddNumbers(input);
console.log(missingOddNumbers); => [13]
