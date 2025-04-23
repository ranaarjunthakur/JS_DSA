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
