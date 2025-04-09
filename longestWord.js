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

//////////////////////////////////////////////////////

function longestWord(str) {
  return str.split(' ').reduce((a, b) => a.length > b.length ? a : b);
}
console.log(longestWord("I love programming"));
