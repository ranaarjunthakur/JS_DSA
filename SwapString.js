let str ='w3resource'

function Swap(str){
  
 let first = str[0]
 let last = str[str.length-1]
 let middel = str.slice(1, str.length-1)
 
 return last + middel + first
  
}


let res = Swap(str)
console.log(res)

