function arrChunk(arr,n){
  let res =[]
  
  for(let i=0; i<arr.length; i+=n){
    let chunk =  arr.slice(i,i+n)
    res.push(chunk)
  }
  return res
}

const array = ['s', 'l', 'i', 'n', 'g', 'a', 'c', 'a', 'd', 'e', 'm', 'y'];
const size = 3;

console.log(arrChunk(array,size))



Output:

[
  [ 's', 'l', 'i' ],
  [ 'n', 'g', 'a' ],
  [ 'c', 'a', 'd' ],
  [ 'e', 'm', 'y' ]
]
