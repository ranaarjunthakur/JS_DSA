///////////////// palindrome //////////////////////////
let str= 'nitin'

function palindrome(str){
let revWord = str.split('').reverse().join('')
return revWord === str
}

let res = palindrome(str)

console.log(res)

////////////////////////////////////////////////////////

let str ='nitin'
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        
        if (str[i] !== str[len - 1 - i]) {    // if first string word(n) !== last string word(n)  then false
            return false;
        }
    }

    return true;
}

let res = palindrome(str)

console.log(res)

///////////////////////////////////////////////////

function isPalindrome(s) {
    return s === s.split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("noon"));
