function countWords(str) {
    str = str.trim();
    if (str === "") {
        return 0;
    }
    return str.split(/\s+/).length;
}

let sentence = "Hello world! This is a sample sentence.";
console.log(countWords(sentence)); // Output: 7
