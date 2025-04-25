for (let b = 0; b<= 100; b++) {
    console.log(b / 4);
    if (!isFinite(b)) {
        return 'Reikalingas normalus skaicius.';
    }
    if (b < 0) {
        count--;
    }
    const numerisAsString = '' + b;
    let count = numerisAsString.length;
}

function checkNumber(num) {
    if (num >= 0) {
        return 'Skaicius yra teigiamas';
    } else {
        console.log('Skaicius yra neigiamas.');
    }
}

// Corrected function call

console.clear();

let num = (1,1,2,3,3,3,4)
function checkNumber(num) {
    if (num >= 0) {
        return 'Skaicius yra teigiamas';
    } else {
        console.log('Skaicius yra neigiamas.');
    }
}


console.clear();

function reverseWords(str){
    let result = 0;
    
    for (let i =0; i<str.length; i++){
        result += str[str.length -i];
    }
  return result; // reverse those words
}
console.log(reverseWords(1 ,1,2,3,3,3,4));

console.clear();

function cookie(x){
    let names = ['Zach', 'Monica', 'the dog']
    const c = typeof x;
    if (c === 'string')
        return 'Who ate the last cookie ? It was ' + names[0] + '!';
    else if (c === 'number') {
        return 'Who ate the last cookie ? It was ' + names[1] + '!';
    }else{
        return 'Who ate the last cookie ? It was ' + names[2] + '!'; 
    }
}

console.log(cookie('52'));

function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number;counter++) {
        newArray.push(counter);
    }
    return newArray;
}

console.log(createArray(2))

function buildString(...template){
    return `I like ${template.join(',')}!`;
  }
  console.log(buildString('Cheese', 'Milk', 'Chocolate'))

  function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+':
       result = value.a + value.b;
       break;
      case'-':
       result = value.a - value.b;
       break;
      case'/':
       result = value.a / value.b;
       break;
      case'*':
       result = value.a * value.b;
       break;
      case'%':
       result = value.a % value.b;
       break;
      case'^':
       result = Math.pow(value.a, value.b);
       break;
       default:
       result = NaN;
    }
    return result;
  }
  console.log(evalObject(1, 1))

  console.clear();

  function faktorialas(n) {
    if (n < 0) return "Klaida: faktorialas apibrėžtas tik neneigiamiems sveikiesiems skaičiams";
    let rezultatas = 1;
    for (let i = 2; i <= n; i++) {
      rezultatas *= i;
    }
    return rezultatas;
  }

  console.log(faktorialas(-7));

  function suskaiciuotiRaides(tekstas, raide) {
    const mazosiosRaides = tekstas.toLowerCase();
    const ieskomaRaide = raide.toLowerCase();
    
    let skaicius = 0;
    
    for (let i = 0; i < mazosiosRaides.length; i++) {
      if (mazosiosRaides[i] === ieskomaRaide) {
        skaicius++;
      }
    }
    
    return skaicius;
  }
  console.log(suskaiciuotiRaides('Labas' , 'a'))

  function isFactor(base, factor) {
    if (base < 0) return false;     
    if (factor <= 0) return false;    
    return base % factor === 0;
  }

  console.log(isFactor(10, 3))

  function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return Math.floor(sum / marks.length);
  }

  console.log(getAverage([1,2,3,4,5]))

  function chromosomeCheck(sperm) {
    if (sperm = 'XY'){
      return "Congratulations! You're going to have a son."
    }
    else if (sperm = 'XX')
      return "Congratulations! You're going to have a daughter."
    }

    function findNeedle(haystack) {
      if (haystack.indexOf('needle') === -1) {
        return "needles not found";
      }
      return "found the needle at position " + haystack.indexOf('needle');
    }
 console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
 console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));
 console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));
 console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));