let Input = [{"a": 1, "b": 2}];

function reArrange(arr) {
  let res = {};
  arr.forEach(obj => {
]    Object.entries(obj).forEach(([key, value]) => {
      res[value.toString()] = key.toString();
    });
  });

  return res;
}

console.log(reArrange(Input));

///////////////////////////////////////////////////////

let Input = [{"a": 1, "b": 2}];

function reArrange(arr) {
  let res = {};
  let obj = arr[0]; // since there's only one object in the array

  for (let key in obj) {
    res[obj[key]] = key;
  }

  return res;
}

console.log(reArrange(Input));


///////////////////////////////////////////////////


function reArrange(arr) {
  let res = {};
  
  for (let obj of arr) {
    for (let key in obj) {
      res[obj[key]] = key;
    }
  }

  return res;
}

let Input = [{"a": 1, "b": 2}, {"c": 3, "d": 4}];
console.log(reArrange(Input)); 

// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


