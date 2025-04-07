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
console.log(s1);

s1.splice(1, 2);
console.log(s1);

