function anagram(str1,str2){
  
  let obj={}
  let obj2={}
  
  if(str1.length !== str2.length){
    return false
  }
  
  for(let val of str1){
    obj[val] ? ++obj[val] : (obj[val]=1)
  }
  
  for(let val of str2){
    obj2[val] ? ++obj2[val] : (obj2[val]=1)
  }
  
  for(let key in obj){
    if(obj[key] !== obj2[key]){
      return false
    }
  }
  
  return true;
  
}

console.log(anagram('hello','llohe'))


/////////////////////////////using inbuilt function/////////////////////

function anagram(str1, str2) {
  // Check if strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }
  
  // Sort both strings and compare them
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(anagram('hello', 'llohe'));  // true


Output:

true
