///////////////////////////USING FLAT METHOD///////////////////////////////////////

const flattened = array.flat();
console.log(flattened);

//////////////////////// USING INFINITY/////////////////////////////////////

const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(Infinity));

////////////////////////WITH FOR LOOP/////////////////////////////////////


const flattened = [];

for (let item of array) {
  if (Array.isArray(item)) {
    flattened.push(...item);
  } else {
    flattened.push(item);
  }
}

console.log(flattened);


//////////////////////////USING TERNARY OPERATOR /////////////////////////

const array = [1, 2, [3, 4], [5, 6, 7]];

let flat =[]

for(let val of array){
   Array.isArray(val) ? flat.push(...val) : flat.push(val)
}

console.log(flat)


///////////////////////WITH RECURSION ///////////////////////////////////

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

////////////////////////WITHOUT RECURSION/////////////////////////////////////

const array = [1, 2, [3, 4], [5, 6, 7]];
const flattened = [];
for (let i = 0; i < array.length; i++) {
  if (Array.isArray(array[i])) {
    flattened.push(...array[i]);
  } else {
    flattened.push(array[i]);
  }
}
console.log(flattened); 
