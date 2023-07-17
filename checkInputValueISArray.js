///////////// Using  Array.isArray()   and   [] instanceof Array  ///////////////////////////////


function IsArray(val){
  
  if(Array.isArray(val)){
    console.log('input value is Array')
  }else{
     console.log('input value is not Array')
  }
  
  return val instanceof Array
  
}


let res =  IsArray([])

console.log(res)
