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

//////////////////////////////////////////////////////////////////////

let arr=[9,4,56,8,3,5,2]

function sorter(para1){
    
    if(para1[i]<para1[j]){
        i++;
        j++;
        sorter(para1)
    }
    else if (para1[i]>para1[j]){
       [para1[i],para1[j]]=[para1[j],para1[i]]
        i=0 
        j=1
        sorter(para1)
    }
     else {  
         return para1; 
     }
}

sorter(arr)
console.log(arr)
