let str = 'abacddbec';

function nonRepeated(str) {
  let charCount = {}; // Object to store character counts
  let result = [];    // Array to store non-repeated characters

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the characters that appear only once
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      result.push(char);
    }
  }

  return result;
}

console.log(nonRepeated(str)); // ['e']

//////////////////////////////////////////////////////////////////////

let str = 'abacddbec'

function nonRepeated(str) {
return str.split('').filter((val,index)=> str.indexOf(val) == str.lastIndexOf(val))
}

console.log(nonRepeated(str));

///////////////////////////////////////////////////////////////////

let str = 'abacddbec';

function nonRepeated(str) {
  let count ={};
  let res =[];
  
  for(let val of str){
     count[val] ? ++ count[val] : (count[val]=1)
  }
  
   for(let val of str){
     if(count[val] == 1){
       res.push(val);
     }
   }
   
   return res
}

console.log(nonRepeated(str));
