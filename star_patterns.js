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
