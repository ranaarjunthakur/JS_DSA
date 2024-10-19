let str = 'Web Development Tutorial'

function longestWord(str){
  
let longest=''

for(let val of str.split(' ')){
  if(val.length > longest.length){
    longest = val
  }
}
return longest
}

console.log(longestWord(str))


Output:

Development
