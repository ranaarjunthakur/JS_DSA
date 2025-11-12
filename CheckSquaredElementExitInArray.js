//////////////////////////check if an array has squared elements of another array (regardless of order)?////////////////////////

let arr1=[1,2,3,4]
let arr2=[1,4,9,16]

function isSquare(arr1,arr2){
    for(let i=0; i<arr1.length;i++){
        let isSquare = false;
        for(let j=0; j<arr2.length;j++){
            if(arr1[i]*arr1[i] === arr2[j]){
                isSquare = true;
            }
            else if(j === arr2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}

let res = isSquare(arr1,arr2)
console.log(res)

///////////////////////////////////////////////////////


function isSquare(arr1, arr2) {
  return arr1.every(num => arr2.includes(num * num));
}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 4, 9, 16];

let res = isSquare(arr1, arr2);
console.log(res); // true

////////////////////////////////////////////////////

function isSquare(arr1, arr2) {
  const squares = new Set(arr2);
  return arr1.every(num => squares.has(num * num));
}

