function allPairs(nums, target) {
    let pairs = [];
    let seen = new Set();

    for (let num of nums) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num].sort((a, b) => a - b));
        }
        seen.add(num);
    }

    return pairs;
}

// Examples
console.log(allPairs([2, 4, 5, 3], 7)); 
console.log(allPairs([5, 3, 9, 2, 1], 3));
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));

//////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];
const target = 6;

function findPairs(arr,target){
  let seen = new Set();
  let pair =[]
  
  for(let val of arr){
    let complement = target - val
    if(seen.has(complement)){
      pair.push([complement,val])
    }
    seen.add(val)
  }
  return pair
}


console.log(findPairs(arr,target))  
// [[2,4],[1,5]]

/////////////////////////////////////////////////////////

let arr = [1,2,3,4,5,6];

function pairIndices(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([i, j]); // store indices
      }
    }
  }

  return pairs;
}

let res = pairIndices(arr, 5);
console.log(res); // [[0,3],[1,2]]

//////////////////////////////////////////////////////////

let arr = [1,2,3,4,5,6];

function pairIndices(arr, target) {
  let pairs = [];
  let seen = new Map(); // store value → index

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen.has(complement)) {
      pairs.push([seen.get(complement), i]);
    }
    seen.set(arr[i], i);
  }

  return pairs;
}

let res = pairIndices(arr, 5);
console.log(res); // [[0,3],[1,2]]


