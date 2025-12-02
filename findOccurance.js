let arr=[1,2,4,6,7,8,9,2,3,4,5,6,8,2]

function occur(arr){
    let result ={}
    
    for(let val of arr){
        if(result[val]){
            result[val] = result[val] +1
        }else{
            result[val] = 1
        }
    }
    let max = 0;
    let val = null
    
    for(let key in result){
        if(result[key] > max){
            max = result[key]
            val = key
        }
    }
    return [val,max]
}
console.log(occur(arr))

////////////////////////////////FIND MOST OCCUR VALUE///////////////////////////////////////////

 var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostOccur(arr){
  let obj={}
  
  for(let val of arr){
   obj[val] ? ++obj[val] : (obj[val]=1);
  }
  
  return Object.keys(obj).reduce((a,b)=> obj[a]>obj[b] ? a:b)
}

console.log(mostOccur(arr1))

////////////////////////FIND FIRST UNIQUE CHARACTER///////////////////////////////////////

function firstUniqueChar(str) {
 let obj ={}
 
for(let val of str){
  obj[val] ? ++obj[val] : (obj[val]=1)
}
 
 
 for(let val of str){
   if(obj[val] === 1){
     return val
   }
 }
 
return null
 
}
console.log(firstUniqueChar("swiss")); // "w"

////////////////////////count the occurrences of a character in a string//////////////////////////////////////

function countChar(str, char) 
{
  return str.split(char).length - 1;
}

console.log(countChar('GeeksForGeeks', 'G'));
