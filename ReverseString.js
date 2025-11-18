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
