////////////////////BUBBLE SORT/////////////////////////////////////

var arr = [5,6,3,1,2,4];  
  
bubbleSortAlgo(arr);  
  
function bubbleSortAlgo(arr){  
    for(var i=0;i<arr.length;i++){  
        for(var j=0;j<arr.length-i-1;j++){  
            if(arr[j]>arr[j+1]){  
                var tempValue= arr[j];  
                arr[j]=arr[j+1];  
                arr[j+1]=tempValue;  
            }  
        }  
    }  
    console.log(arr);  
}  


/////////////////////////////////////////////////////////////


let arr =[6,7,8,9,10,1,2,3,4,5,11]


  function bubbleSort(arr) {
      for(let i=arr.length;i>0;i--){
          for(let j=0;j<i-1;j++){
              if(arr[j]>arr[j+1]){
                  [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
              }
          }
      }
      return arr
  }
  
  let result = bubbleSort(arr)
  console.log(result)
  
