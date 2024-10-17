var arr = [3, 0, 2, 5, -1, 4, 1 ];

function QuickSort(arr){
  if (arr.length <= 1) return arr;
  
  let left =[];
  let right=[];
  let result =[];
  let pivot = arr.pop();
  
  for(let i=0; i<arr.length;i++){
    if(arr[i] <= pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return result.concat(QuickSort(left),pivot, QuickSort(right));
}
console.log(QuickSort(arr))

Output:

[
  -1, 0, 1, 2,
   3, 4, 5
]

/////////////////////////////////////////////////////////////////////


function quickSort(array) {
  if (array.length <= 1) return array; // Base case

  const pivot = array[array.length - 1]; // Choose last element as pivot
  const left = array.filter(item => item < pivot); // Elements less than pivot
  const right = array.filter(item => item > pivot); // Elements greater than pivot
  const middle = array.filter(item => item === pivot); // Elements equal to pivot

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

const myArray = [3, 0, 2, 5, -1, 4, 1];
const sortedArray = quickSort(myArray);
console.log("Sorted array:", sortedArray);
