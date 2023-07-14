let input ='The brown dog jumped over the lazy dog when the brown fox was sleeping'

function count(input){
const result = new Object();
const arr= input.split(' ')     // divide string into seprate words usnig split(' ') and return new Array of string.

for (let val of arr){
    if(result[val]){            // if, In a result Object we have already word exist then we increment a in a Word.
        result[val]++
        // console.log(result[val]++)
    }else{
        result[val] = 1             // otherwise, add the word to the result object with a count of 1
        // console.log( result[val] = 1)
    }
}
return result
}

let res = count(input)
console.log(res);


// output:
{
  The: 1,
  brown: 2,
  dog: 2,
  jumped: 1,
  over: 1,
  the: 2,
  lazy: 1,
  when: 1,
  fox: 1,
  was: 1,
  sleeping: 1
}
