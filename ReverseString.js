let str = 'w3resource';

function reverseStr(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

let res = reverseStr(str);
console.log(res); // Output: 'ecruoser3w'


//////////////////////Add Last 3 Characters to Front and Back of String/////////////////////////


function addLast3FrontBack(str) {
  if (str.length < 3) return str; // Not enough characters to extract last 3
  let last3 = str.slice(-3);
  return last3 + str + last3;
}

let original = 'w3resource';
let modified = addLast3FrontBack(original);
console.log(modified); // Output: 'rcew3resourcerce'
