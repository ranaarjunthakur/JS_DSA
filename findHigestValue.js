let arr =[1,2,3,4,5,6]


function findHighestOrLowest(arr){
  
  let highest = arr[0]
  let lowest = arr[0]
  
  for(let i=0; i<arr.length;i++){
    
    if(highest < arr[i]){
      highest = arr[i]
    }
    if(lowest > arr[i]){
      lowest = arr[i]
    }
  }
  return [highest, lowest]
}

let res = findHighestOrLowest(arr)
console.log(res)
