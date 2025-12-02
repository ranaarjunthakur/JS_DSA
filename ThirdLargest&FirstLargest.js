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

///////////////////////FIND LARGEST VALUE///////////////////////////////////


function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));
