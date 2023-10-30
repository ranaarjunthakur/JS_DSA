let number = '1234567890123456'

function cardNumber(number){
  
  let numericChar = number.replace(/\D/g, '');
  // return numericChars
  
  let formattedNumber = '';
  
  for(let i=0; i<numericChar.length; i++){
    if(i>0 && i%4===0){
      formattedNumber += " "
    }
    formattedNumber += numericChar[i]
  }
  return  formattedNumber
 
}


let res = cardNumber(number)
console.log(res)

// Output: "1234 5678 9012 3456"
