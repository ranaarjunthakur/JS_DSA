const arr = [9, 4, 9, 6, 7, 4];

function nonRepeatedNumber(arr){
  let result ={}
  
  for(let val of arr){
     result[val] ? ++result[val] : (result[val]=1)
  }
  let allNonRepeated=[]
  
  for(let val of arr){
    if(result[val] === 1){
      allNonRepeated.push(val)
    }
  }
  return allNonRepeated
}

console.log(nonRepeatedNumber(arr))

Output:

[ 6, 7 ]
