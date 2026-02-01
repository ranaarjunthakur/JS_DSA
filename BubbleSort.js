////////////////////BUBBLE SORT/////////////////////////////////////

function sortArrayDesc(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
               [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));

/////////////////////////////////////////////////////////////////////

let arr =[6,7,8,9,10,1,2,3,4,5,11]


  function bubbleSort(arr) {
      for(let i=arr.length;i>0;i--){
          for(let j=0;j<i-1;j++){
              if(arr[j]>arr[j+1]){
                  [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
              }
          }
      }
      return arr
  }
  
  let result = bubbleSort(arr)
  console.log(result)


//////////////////////////////////////////////////////////

var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function sortByTitle(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].title > arr[j + 1].title) {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr;
}

let sorted = sortByTitle(library);
console.log(sorted);


