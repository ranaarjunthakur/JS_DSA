let inputArray = [3, 1, 7, 9, 2, 8, 4, 6, 5];


function remove(arr){
  
  for(let i=0; i<arr.length;i++){
    for(let j= i-1; j>=-1;j--){
      if(arr[j+1]<arr[j]){
        [arr[j+1],arr[j]] =[arr[j],arr[j+1]]
      }
    }
  }
  // arr.pop()
  // arr.shift()
  arr = arr.slice(1,arr.length-1)
  return arr;
}

console.log(remove(inputArray))

/////////////////////////////using filter method//////////////////////////

let max = Math.max(...inputArray)
let min = Math.min(...inputArray)

let res = inputArray.filter((val)=> val !== max && val !== min);

console.log(res)
