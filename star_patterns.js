//// 1. Square Star Pattern in Javascript  ///

let a=10;
let str=''

for(let i=1; i<=a;i++){
    for(j=1;j<=a;j++){
        str+= "*"
    }
    str+= '\n'
}

console.log(str)   

//2. Hollow Square Pattern//


let a=10;
let str=''


for(let i=0; i<a; i++){
    for(j=0; j<a; j++){
        if(i===0|| i===a-1){
            str += "*"
        }else{
            if(j===0 || j===a-1){
                str += "*"
            }else{
                str += " "
            }
        }
    }
    
    str += "\n"
}


console.log(str)



/////////////////////////////pyramid pattern///////////////////////////////////////////////

let n = 5;
let str='';

// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    str+= ''
  }
  // printing star
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
     str+= '*'
  }
   str+= '\n'
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
     str+= ''
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
   str+= '*'
  }
  str+= '\n'
}

console.log(str)
