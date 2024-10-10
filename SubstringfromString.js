let str ="abcabcbb";

function longestSubstring(str){
  let start =0;
  let maxLength=0;
  let uniqueChar = new Set();
  let longestChar =''
  
  
  for(let i=0;i<str.length;i++){
    while(uniqueChar.has(str[i])){
      uniqueChar.delete(str[start]);
      start++;
    }
    uniqueChar.add(str[i]);
    
   if (i - start + 1 > maxLength) {
      maxLength = i - start + 1;
      longestChar = str.substring(start, i + 1); 
    }
  
  }
  return {maxLength,longestChar}
}

console.log(longestSubstring(str))


Output:

{ maxLength: 3, longestChar: 'abc' }
