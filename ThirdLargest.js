let arr=[10,20,30,40,2,3,4,9]

function thirdLargest(arr){
    
   let max1= Math.max(...arr)
//   return max1
   arr = arr.filter((val)=>val !==max1)
//   return arr
  let max2 = Math.max(...arr)
  arr = arr.filter((val)=>val !==max2)
//   return arr

  return Math.max(...arr)
   

}

let res = thirdLargest(arr)

console.log(res)
