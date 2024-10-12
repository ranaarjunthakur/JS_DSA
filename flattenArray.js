const array = [1, 2, [3, 4], [5, 6, 7]];

let flat = (arr)=>{
  let result =[]
  for(let i=0;i<arr.length; i++){
    if(Array.isArray(arr[i])){
      let flatten = flat(arr[i]) 
      for(let j=0; j<flatten.length;j++){
        result.push(flatten[j])
      }
    }else{
      result.push(arr[i])
    }
  }
  return result
}

console.log(flat(array))

Output:

[
  1, 2, 3, 4,
  5, 6, 7
]
