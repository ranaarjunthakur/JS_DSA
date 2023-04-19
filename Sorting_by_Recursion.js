let myArray = [2, 8, 1, 3, 6, 7, 5, 4] 

let myNewList=[]
let i=0;
let j=1;

function isSorted(array){
    for(let i=0; i<array.length;i++){
        if(array[i] > array[i+1]){    // return false if array[i]>array[i+1]
            return false
        }
    }
    return true;
}

function sortChecked(array){
    if(isSorted(array)){
        myNewList = array
        return;
    }else if(array[i]<array[j]){               // check if array[i]<array[j]
        i++;
        j++;
        sortChecked(array)
    }else{
        [array[i],array[j]]=[array[j],array[i]]            // swap values[ i,j [=[ j,i]
        i=0;
        j=1;
        sortChecked(array)
    }
}

sortChecked(myArray)
console.log(myNewList)
