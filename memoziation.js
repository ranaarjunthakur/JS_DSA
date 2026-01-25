// What is Memoization? (Simple Meaning)

// 👉 Memoization means:

// Result ko yaad (store) karke rakhna, taaki same input par dobara calculation na karna pade.

// 📌 One-line definition (Interview ready):

// Memoization is an optimization technique where function results are cached based on input parameters.

function addNum(){
  
  let cache ={}
  
  return function (a,b){
    let key = `${a} , ${b}`;
      
    if(cache[key]){
      return cache[key]
    }
     
    const result = a+b;
    cache[key] = result
    return result
     
  }
  
}

let add = addNum()
console.log(add(2,3))
console.log(add(4,3))
