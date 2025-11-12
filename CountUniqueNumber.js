let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8];

function countNonUnique(arr) {
  const freq = {};
  
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let count = 0;
  for (let key in freq) {
    if (freq[key] > 1) {
      count++;
    }
  }

  return count;
}

console.log(countNonUnique(arr));

///////////////////////////////////////////////////////////////////////


let arr =[1,1,2,2,3,3,4,4,5,6,7,8,8]

function unique (arr){
   if(arr.length>0){
       let i=0
       for(let j=1; j<arr.length;j++){
           if(arr[i] !== arr[j]){
                 i++;
                arr[i] = arr[j]
           }
       }
        return i+1;
   }else{
       throw new Error("array is empty")
   }
  
}

let res = unique(arr);
console.log(res)  =>8
