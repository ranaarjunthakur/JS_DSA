/////////////////////////////////////////////////////////

function createMatrix(rows, cols) {
  let result = [];
  for (let i = 0; i < rows; i++) {
    result.push(new Array(cols).fill(0));
  }
  return result;
}

console.log(createMatrix(3, 4));

////////////////////////////////////////////////////////

let rows = 2;
let cols = 3;

let matrix = new Array(rows).fill(0).map(() =>
  new Array(cols).fill(1)
);

console.log(matrix);


/////////////////////////////////////////////////////


let rows = 3;
let cols = 3;

let matrix = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => 0)
);

console.log(matrix);
