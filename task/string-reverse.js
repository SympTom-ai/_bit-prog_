function stringReverse (text) {
    let result = '';
    
    for (let i = text.length - 1; i >= 0; i--){
        result += text[i];
    }

    return result
}

console.clear();

function stringReverse (text) {
    let result = '';
    
    for (let i =0; i<text.length; i++){
        result += text[text.length -i];
    }

    return result
}

console.log(stringReverse('abc'));
console.log(stringReverse('djkndfsjkn'));
console.log(stringReverse('gsdg'));
console.log(stringReverse('dgsgf'));
console.log(stringReverse('fesgfsesrg'));

console.log(stringReverse([]));
let words = ["The greatest victory is that which requires no battle"]

function reverseWords(words){
    return words.reverse
  }

  console.log(reverseWords(words));