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


function reverseWords(str)
{
  let arr = str.split('');
  let result = ''
  for (let i = arr.length - 1; i >= 0; i--){
    if (arr[1] == '') continue;
    if(result.length > 0) result += ''
    result += arr[i]
  }

  return result; // reverse those words
}

console.log(reverseWords("The greatest victory is that which requires no battle"));

console.clear();

function wrap(_value) {
    return
    {
    };
  }

  console.log(wrap(5)); // undefined