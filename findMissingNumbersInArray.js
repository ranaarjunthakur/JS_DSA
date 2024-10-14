function missingNumber(arr) {
    const numberObj = {};
    let missingNumber=[]
    
    for(let val of arr){
      numberObj[val] = true
    }
 
    for (let i = 1; i <= 15; i++) {
        if (!numberObj[i]) {
            missingNumber.push(i)
        }
    }
    
    return missingNumber
}

let arr=[1,2,3,5,6,9,11]

console.log(missingNumber(arr))


Output:

[ 4, 7, 8, 10 ]
