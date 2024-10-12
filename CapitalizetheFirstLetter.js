const inputText = "geeks for geeks. hello students."


let res = inputText.split(' ')

for(let i=0; i<res.length; i++){
    res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    console.log(res[i])
}

//////////////////////////////////////////////////////////////

function capitalizeSentences(str) {
  const sentences = str.split('. ');
  sentences.forEach((sentence, index) => {
    sentences[index] = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });
  return sentences.join('. ');
}

const inputString = "hello. how are you? i am fine.";
const capitalizedString = capitalizeSentences(inputString);
console.log(capitalizedString);
