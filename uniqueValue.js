let arr = [1, 5, 3, 9, 7, 7, 1, 5, 9, 5];

function unique(arr) {
  let uniqueArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    
    // Check if the current element is already in the uniqueArr
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        exists = true;
        break;
      }
    }

    // If it's not in uniqueArr, add it
    if (!exists) {
      uniqueArr.push(arr[i]);
    }
  }
  
  return uniqueArr;
}

console.log(unique(arr));


////////////////////////////////////////////////////////

let arr =[1, 5, 3, 9, 7,7,1,5,9,5]

function unique(arr){
  return  arr.filter((val,index)=> arr.indexOf(val)==index)
}

console.log(unique(arr))
