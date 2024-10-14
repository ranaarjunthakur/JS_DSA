let arr = [10, 25, 30, -10, 32, -35];

function seprate(arr){
  negative=[];
  positive=[];
for(let i=0;i<=arr.length;i++){
  if(arr[i] <0){
    negative.push(arr[i])
  }else{
    positive.push(arr[i])
  }
}
return [...positive , ...negative]
}

console.log(seprate(arr))
