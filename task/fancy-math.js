function fancyMath(a, sign, b){
    if (sign  === '-') {
        return a - b;
    }
    if (sign  === '*') {
        return a * b;
    }
    if (sign  === '/') {
        return a / b;
    }
    if (sign  === '+') {
        return a + b;
    }
    return 0;
}

console.log(fancyMath(2, '+', 3))
console.log(fancyMath(2, '-', 3))
console.log(fancyMath(2, '*', 3))
console.log(fancyMath(2, '/', 3));

function fancyMath(n1, sign, n2) {
    const func = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
        '%': (a, b) => a % b,
    };

    const funcToUse = func[sign];
    if (funcToUse === undefined) {
        return ':(';
    }

    return funcToUse(n1, n2);
}

console.log(fancyMath(7, '+', 5));
console.log(fancyMath(7, '-', 5));
console.log(fancyMath(7, '*', 5));
console.log(fancyMath(7, '/', 5));
console.log(fancyMath(7, '**', 5));
console.log(fancyMath(7, '%', 5));

console.clear();

function mystery() {
    var results = {sanity: 'Hello'};
    return
      results;
  }
  console.log(mystery());

  console.clear();


  let name = 'Abe'

const greetAbe = () => 'Hello, ' + name + '!'

name2 = 'Ben'

const greetBen = () => 'Hello, ' + name2 + '!'

console.log(greetAbe())
console.log(greetBen())