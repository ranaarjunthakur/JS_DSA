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
