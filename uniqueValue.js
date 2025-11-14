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

//////////////////////////////////////////////////////

// Sample array of objects
let array = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Doe' },
    { id: 2, name: 'Jane' }  
];

function getUniqueValues(array, key) {
    return array.filter((obj, index, self) =>
        self.findIndex(item => item[key] === obj[key]) === index
    );
}

let uniqueArray = getUniqueValues(array, 'id');
console.log(uniqueArray);


//////////////////////////////////////////////////////////////


let arr = [1, 5, 3, 9, 7, 7, 1, 5, 9, 5];
let uniqueValues = [];
let seen = {};

arr.forEach(item => {
  if (!seen[item]) {
    seen[item] = true;
    uniqueValues.push(item);
  }
});

console.log(uniqueValues);

/////////////////////////////////////////////////////////////


const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
array.forEach(item => {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
