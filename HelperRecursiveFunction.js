
let arr =[1,2,3,4,5,6,7,8,9,10]

function  findOdd(arr){
    let result =[];
    
    function helperRecursive(inputArr){
        if(inputArr.length==0){
            return;
        }
        if(inputArr[0]%2!==0){
            result.push(inputArr[0])
        }
        helperRecursive(inputArr.slice(1))
    }
    helperRecursive(arr)
    return result;
}

const res = findOdd(arr)
console.log(res)


