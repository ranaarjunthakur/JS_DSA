function getSubsets(arr,len) {
  let res=[]
  for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
      if(len === 2){
        res.push([arr[i],arr[j]])
      }
    }
  }
  return res
}

let arr = [1, 2, 3];
let subsetLength = 2;
console.log(getSubsets(arr, subsetLength))


Output:

[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
