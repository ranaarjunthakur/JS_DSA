/////////////Reverse A String////////////////////////

let string = "Arjun Pratap Rana"

let res = string.split(" ").map((word)=>{
  return  word.split("").reverse().join("")
})

console.log(res.join(" "))

///////////////////Check Element ia Array or  Not///////////////////////////////

function check(ele){
  let res = Array.isArray(ele)
  console.log(res)
}

 check({})
 check([])

////////////////////Check Number Is Integer or Not//////////////////////////////

console.log(Number.isInteger(12.3))

function checkInteger(num){
  if(num%1 ===0){
    console.log("integer")
  }else{
    console.log("not")
  }
}
checkInteger(12.1)

///////////////////////////////////////////////////////

let arr=[1,2,3,4,5,6]
let empArr=[...arr]

console.log(arr.concat(empArr))

////////////////////put String Alphabetic Order(a,b,c,d....)/////////////////////////////////

function alphabeticOrder(str){
  
  return str.split("").sort().join("")

}

let res2 = alphabeticOrder('Arjun')
console.log(res2)  => ajnru

//////////////////How to captalize first letter of string/////////////////////////////////

function CapFirstLetter(str){
   return str.split(" ").map((val)=>{
      return val.at(0).toUpperCase() + val.substring(1)
   })
}


let res3 = CapFirstLetter('arjun pratap rana')
console.log(res3)  => Arjun Pratap Rana

///////////////////Check How many time each alphabet in a word////////////////////////////

function occ(str){
  
  let obj ={}

   str.split("").forEach((val)=>{
     console.log(obj)
    if(obj.hasOwnProperty(val)===false){
      obj[val]=1
    }else{
      obj[val]++
    }
  })
  return obj
}

let res4 = occ("Apple")
console.log(res4)=> { A: 1, p: 2, l: 1, e: 1 }
