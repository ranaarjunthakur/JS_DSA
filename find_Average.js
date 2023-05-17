let heights =[140,142,145,150]

function avr(heights){
  let sum = heights.reduce((a,c)=>a+c)
  let average = sum/heights.length
  return average;
}

let res = avr(heights)
console.log('Total Average =>', res)


///////////////////////////////////////////////////


let heights =[140,142,145,150]

let sum=0;
let len = heights.length
for(let val of heights){
    sum += val
}
let average = sum/len
console.log('Total Average', average)
