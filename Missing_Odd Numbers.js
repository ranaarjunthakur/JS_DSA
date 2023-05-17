
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


////////////////////////////////////////////////////////

const input = [5,7,9,11,15,17,19];
let outputs = 13

let min = Math.min(...input)
let max = Math.max(...input)

for(let i=min;  i<=max; i++){
    if(i % 2 !== 0 && !input.includes(i)){
         console.log(i)
    }
}



//////////////////////////////////////////////


for(let i=0; i<=input.length;i++){
    let current = input[i]
    let next = current+2

    if(input[i+1] !==next){
        console.log(next)
        break;
    }
}

