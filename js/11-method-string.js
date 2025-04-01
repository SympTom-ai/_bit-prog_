/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String
*/

// at
console.log('\nat');

console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[-1]);

const text = 'Pomidoras'
console.log(text[0]);
console.log(text[text.length - 1]);

console.log('---', text.at(0));
console.log('---', text.at(1));
console.log('---', text.at(-2));
console.log('---', text.at(3));
console.log('---', text.at(-4));
console.log('---', text.at(5));
console.log('---', text.at(-6));
console.log('---', text.at(7));
console.log('---', text.at(8));

// includes
console.log('\nincludes\n');
console.log('Audi'.includes('A'));
console.log('Audi'.includes('a'));
console.log('Audi'.includes('V'));
console.log('Audi'.includes('h'));
console.log('Audi'.includes('d'));
console.log('Audi'.includes('i'));

//startwith
console.log('\nStartsWith\n')

console.log('Audi'.startsWith('A'));
console.log('Audi'.startsWith('a'));
console.log('Audi'.startsWith('V'));
console.log('Audi'.startsWith('h'));
console.log('Audi'.startsWith('d'));
console.log('Audi'.startsWith('i'));

//endsWith
console.log('\nendsWith\n')

console.log('Audi'.endsWith('A'));
console.log('Audi'.endsWith('a'));
console.log('Audi'.endsWith('V'));
console.log('Audi'.endsWith('h'));
console.log('Audi'.endsWith('d'));
console.log('Audi'.endsWith('i'));
