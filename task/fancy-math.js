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

function getDrinkByProfession(param){
    if (param ==='Jabroni'){
        return `Patron Tequila, should map to Patron Tequila`
    }
    if (param === "School Counselor"){
        return "Anything with Alcohol", "'School Counselor' should map to 'Anything with Alcohol'"
    }
    if(param ==='Programmer'){
        return "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'"   
    }
    if(param === 'Bike Gang Member'){
        return "Moonshine", "'Bike Gang Member' should map to 'Moonshine'"
    }
    if(param === 'Politician'){
        return "Your tax dollars", "'Politician' should map to 'Your tax dollars'"
    }
    if(param === 'Rapper'){
        return "Cristal", "'Rapper' should map to 'Cristal'"
    }
    if(param === 'Pug'){
        return "Beer", "'Pug' should map to 'Beer'"
    }
    if(param === 'pundit'){
        return "Beer", "'pundit' should map to 'Beer'"
    }
}


    console.log(getDrinkByProfession('Jabroni'))
    console.log(getDrinkByProfession('School Counselor'))
    console.log(getDrinkByProfession('Programmer'))
    console.log(getDrinkByProfession('Bike Gang Member'))
    console.log(getDrinkByProfession('Politician'))
    