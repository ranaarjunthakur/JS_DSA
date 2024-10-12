const arr1 = ['dog', 'cat', 'bird'];
const arr2 = ['dog', 'cat', 'bird'];


function compare(a,b){
  
  if(a.length !== b.length){
    return false
  }else{
    for(let i=0; i<a.length;i++){
      if(a[i] == b[i]){
         return true
      }
    }
    return false
  }
  
}

console.log(compare(arr1,arr2))

///////////////////////////////////EVERY method/////////////////////

const arr1 = ['dog', 'cat', 'bird'];
const arr2 = ['dog', 'cat', 'bird'];

const isEqual = arr1.every((element, index) => {
  return element === arr2[index];
});

console.log(isEqual); 

/////////////////////////uisng JSON.stringify and toString Method //////////////////////

console.log(JSON.stringify(arr1) == JSON.stringify(arr2))
console.log(arr1.toString() ==  arr2.toString())
