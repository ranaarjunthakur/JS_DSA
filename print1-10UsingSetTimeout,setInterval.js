///////////////////////// SETTIMEOUT FUNCTION PRINT 1 - 10 AFTER ONE SECOND/////////////////
for(let i=0; i<10;i++){
  setTimeout(function() {
    console.log(i)
  }, 1000*i);
}


//////////////////////////////SETINTERVAL FUNCTION  PRINT 1 - 10 AFTER ONE SECOND////////////////////
let count =1;
let interval = setInterval(()=>{
    console.log(count)
    if(count ==10){
       clearInterval(interval)
    }
    count++
},1000)
