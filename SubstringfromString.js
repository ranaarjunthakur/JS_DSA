function longestSubstringWithoutRepeating(str) {
  let longest = '';
  let current = '';

  for (let char of str) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }

    current += char;

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

console.log(longestSubstringWithoutRepeating('abcabcbb')); // Output: 'abc'

////////////////////////////////////////////////////////////////////////////////////////

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



////////////////////////////second approach without set///////////////////////

let str = "abcabcbb";

function longestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let longestChar = '';
  let currentSub = '';  // Store current substring

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If the character is already in the current substring, update start position
    if (currentSub.indexOf(char) !== -1) {
      start = start + currentSub.indexOf(char) + 1;
      currentSub = str.slice(start, i);  // Update current substring from new start
    }

    currentSub += char; // Add the current character

    if (currentSub.length > maxLength) {
      maxLength = currentSub.length;
      longestChar = currentSub; // Save the longest substring
    }
  }

  return { maxLength, longestChar };
}

console.log(longestSubstring(str));


Output:

{ maxLength: 3, longestChar: 'abc' }
