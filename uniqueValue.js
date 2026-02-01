//////////////////////////USING SET/////////////////////////////////


const arr1 = [1, 2, 3, 4, 5, 5, 1, 2, 3, 4];
const uniqueArr1 = [...new Set(arr1)];
console.log(uniqueArr1);


/////////////////////////USING FOOR LOOP/////////////////////////////////

let arr = [1, 5, 3, 9, 7, 7, 1, 5, 9, 5];

const getUniqueArray = (arr) => {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}


///////////////////// USING FILTER///////////////////////////////////

let arr =[1, 5, 3, 9, 7,7,1,5,9,5]

function unique(arr){
  return  arr.filter((val,index)=> index == arr.indexOf(val))
}

console.log(unique(arr))

//////////////////////USING FILTER WITH JSON.stringify()////////////////////////////////

// Sample array of objects
let array = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Doe' },
    { id: 2, name: 'Jane' }  
];

function getUniqueValues(arr) {
  
  return  arr.filter((val,index,self)=> index === self.findIndex((v=> v.id == val.id)))    //with Id
  return  arr.filter((val,index,self)=> index === self.findIndex((v=> JSON.stringify(v) == JSON.stringify(val))))  // Without Id Using JSON.stringify()
}
let uniqueArray = getUniqueValues(array);
console.log(uniqueArray);

//////////////////////// USING FOREACH METHOD WITH  OBJECT//////////////////////////////////////


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

///////////////////////// FOREACH + INCLUDES METHOD////////////////////////////////////


const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
array.forEach(item => {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
