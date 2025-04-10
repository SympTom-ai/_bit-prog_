/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

const numbers = [10, 2, 8, 4, 6];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    doubleNumbers.push(number * 2);
}

console.log(doubleNumbers);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseNames = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    nameSizes.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());
}

console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseNames);

const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];

const n12 = [];
// const n12 = [1, 11, 111, 2, 22, 222, 2222];

for (let i = 0; i < n1.length; i++) {
    n12.push(n1[i]);
}

for (let i = 0; i < n2.length; i++) {
    n12.push(n2[i]);
}

console.log(n12);

const numbers1 = [1, 2, 3, 4, 5];

numbers1.push(6);
console.log(numbers1);

const g1 = numbers1.pop();
console.log(g1);


const g2 = numbers1.shift();
console.log(g2)


const magic = [15, 5, 3, 12, 45, 31];
console.log(magic.indexOf(3));
console.log(magic.indexOf(1));

const texts = ['Kebabas', 'Pica', 'Sushi', 'Salotos'];

const products = `Reikalingi produktai: ${texts.join(', ')}`;
console.log(products);
console.clear();

console.log(texts);
texts.reverse();
console.log(texts);

const c1 = [1, 2, 3, 4, 5];
const c2 = [6, 7, 8, 9, 10];
const c3 = [11, 12, 13, 14, 15];

const c5 = c1.concat(c1, c2);
console.log(c5);
const c6 = c2.concat(c2, c3);

console.clear();

const s1 = [11, 22, 33, 44, 55]




console.clear();

// MAP
const k = [10, 2, 8, 4, 6];
const k2 = [];

for (const n of k) {
    k2.push(n * 2);
}
console.log(k2);

function triple(n) {
    return n * 3;
}

const k3 = k.map(triple);
console.log(k3);

const quadro = n => n * 4;

const k4 = k.map(quadro);
console.log(k4);

const k5 = k.map(n => n * 5);
console.log(k5);

const k6 = k.map(n => n);
console.log(k6);

const k7 = k.map(n => n + 1);
console.log(k7);

const dict = ['pomidoras', 'agurkas', 'bulve', 'svogunas'];

const dict2 = dict.map(w => w[0]);
console.log(dict2);

const dict3 = dict.map(w => w.length);
console.log(dict3);

const people = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

const people100 = people.map(person =>
    `${person.name} liko ${100 - person.age} metai.`);
console.log(people100);

const peopleNames = people.map(person => person.name);
console.log(peopleNames);

const peopleAges = people.map(person => person.age);
console.log(peopleAges);

const peopleMarried = people.map(person => {
    person.isMarried = true;
    person.luckyNumber = 13;
    return person;
});
console.log(peopleMarried);

console.clear();

// FILTER
const p = [10, 2, 8, 4, 6];
const p5 = [];

for (const n of p) {
    if (n > 5) {
        p5.push(n);
    }
}

console.log(p5);

const p6 = p.filter(n => n > 6);
console.log(p6);

const p7 = p.filter(n => n <= 7);
console.log(p7);

const p8 = p.filter(n => n > 2 && n < 8);
console.log(p8);

const texts5 = ['labas', '', 'rytas', '', 'Lietuva'];
const texts5Updated = texts5.filter(t => t.length > 0);
console.log(texts5Updated);

const texts5Updated2 = texts5.filter(t => t);
console.log(texts5Updated2);

console.clear();

// fill
const default5 = [0, 0, 0, 0, 0];
const default6 = Array(6).fill(99);
console.log(default6);

const zeros = Array(10).fill(0);
console.log(zeros);

const string = Array(10).fill('labas' + ' ' + 'rytas' + ' ' + 'Lietuva');

string.fill('labas', 0, 5);
console.log(string);

// every

const trees = ['Berzas', 'Pušis', 'Eglė', 'Klevas', 'Ąžuolas'];
const alltreesValid = trees.every(s => s.length > 0);
console.log(alltreesValid);

const alltreesNamesSizes = trees.every(s => s.length === 5);
console.log(alltreesNamesSizes);

// some 
const someTrees = trees.some(s => s.length > 5);
console.log(someTrees);

const someTrees2 = trees.some(s => s.length > 10);
console.log(someTrees2);

// sort 



  function testEven(n) {
    if(n % 2 === 0)
      {
        return true
      }
     else{ 
       return false
   }
 }

 console.log(testEven(0));

