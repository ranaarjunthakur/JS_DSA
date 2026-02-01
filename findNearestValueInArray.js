////////////////USING LOOP /////////////////////////

function findNearest(arr, target) {
  let nearest = arr[0];

  for (let num of arr) {
    if (Math.abs(num - target) < Math.abs(nearest - target)) {
      nearest = num;
    }
  }
  return nearest;
}

console.log(findNearest([5, 20, 12, 16, 22], 15)); =>16

///////////////////////////////////////////////////////////////

function findNearest(arr, target) {
  return arr.reduce((prev, curr) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  );
}

console.log(findNearest([5, 20, 12, 16, 22], 15));
