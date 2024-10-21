function getSubsets(arr,len) {
  let res=[]
  for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
      if(len === 2){
        res.push([arr[i],arr[j]])
      }
    }
  }
  return res
}

let arr = [1, 2, 3];
let subsetLength = 2;
console.log(getSubsets(arr, subsetLength))


Output:

[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]


///////////////////////////////////////////////////////////////

function getSubsets(arr, subsetLength) {
  let result = [];

  function generateSubsets(start, subset) {
    // Base case: if the current subset's length matches the desired length
    if (subset.length === subsetLength) {
      result.push([...subset]); // Add a copy of the subset to the result
      return;
    }

    // Loop through the array and generate subsets
    for (let i = start; i < arr.length; i++) {
      subset.push(arr[i]); // Add the current element to the subset
      generateSubsets(i + 1, subset); // Recur with the next index
      subset.pop(); // Backtrack and remove the last element
    }
  }

  generateSubsets(0, []); // Start the recursion
  return result;
}

let arr = [1, 2, 3];
let subsetLength = 2;
console.log(getSubsets(arr, subsetLength)); // [[1,2],[1,3],[2,3]]
