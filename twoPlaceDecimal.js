function customNumber(number){
let cNum =  number.toFixed(2)
 return cNum.endsWith('.00')? cNum.slice(0,-3): cNum
}

let res = customNumber(1000.00)    =>  100
console.log(res)

///////////////////////////////////////////////////////////////////

  function numberWithCommas(n) {
    const parts = parseFloat(n).toFixed(2).toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    let finalNumber = numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
    
     return finalNumber.endsWith('.00') ? finalNumber.slice(0,-3): finalNumber
  }
  
  let result = numberWithCommas(10000.00)
  console.log(result)
