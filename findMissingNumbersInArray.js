function missingNumber(arr) {
    const numberObj = {};
    let missingNumber=[]
    
    for(let val of arr){
      numberObj[val] = true
    }
 
    for (let i = 1; i <= 15; i++) {
        if (!numberObj[i]) {
            missingNumber.push(i)
        }
    }
    
    return missingNumber
}

let arr=[1,2,3,5,6,9,11]

console.log(missingNumber(arr))


Output:

[ 4, 7, 8, 10 ]

////////////////////////////////////////////////////////


let arr = [1, 2, 3, 5, 6, 8, 9];

function missingNums(arr) {
  let missing = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(missingNums(arr));
