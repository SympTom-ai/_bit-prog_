const texts = ['Kebabas', 'Pica', 'Sushi', 'Salotos'];
texts.sort();
console.log(texts);
 const pseudo = ['d', 'b', 'ca', 'bf', 'cc', 'db', 1, 2, 3, 4, 5, 6, 7, 8, 9];
pseudo.sort();

console.log(pseudo);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11 ,56 , 32 , 21]
.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const people =[
    {name: 'Jonas', age: 23, isMarried: true},
    {name: 'Petras', age: 18, isMarried: false},
    {name: 'Ona', age: 35, isMarried: true},
    {name: 'Maryte', age: 45, isMarried: false},
    {name: 'Tomas', age: 28, isMarried: true},
    {name: 'Ona', age: 23, isMarried: true},
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);
console.log(people);

people.sort((a, b) => a.name - b.name ? 1 : a.name === b.name ? 0 : -1);
console.log(people);

people.sort((a, b) => a.isMarried > b.isMarried ? 1 : a.isMarried === b.isMarried ? 0 : -1);
console.log(people);