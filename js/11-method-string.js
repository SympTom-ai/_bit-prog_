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

//Repeat
console.log('\nRepeat\n')
console.log('a');
console.log('a'.repeat(60));
console.log('a');

const symbol= 'Labas';
const megasymbol = symbol.repeat(32);

console.log(symbol)
console.log(megasymbol)

function stringRepeat(text, count) {
    let result = '';
    
    for (let i = 0; i < count; i++);{
        result += text;
    }
    
    return result;
}

console.log(stringRepeat('rikiki', 5));

//replace
console.log('\nreplace\n')
console.log('a');
console.log('LabDienele'.replace('b','-'));
console.log('a');

console.log('ananasas'.replace('a',''));
console.log('ananasas'.replaceAll('a',''));
console.log('ananasas'.replaceAll('na',''));

const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll(' ','').length

console.log(hiNormalSize)

console.log('\nSLice\n')
console.log('tortas'.slice(1))


//trim
console.clear();
console.log('\nTrim\n')

console.log(`"${'Agurkas'.trim()}"`);
console.log(`"${'labas   Agurkas'.trim()}"`);
console.log(`"${'Agurkas    labas'.trim()}"`);
console.log(`"${'   Agurkas   '.trim()}"`);
console.log(`"${'           Agurkas'.trimStart()}"`);
console.log(`"${'Agurkas   labas         '.trimEnd()}"`);

//split

console.clear();

console.log('\nSplit\n');

const t1 = 'zodis';
const t1Parts = t1.split('o');
const t1Parts2 = t1.split('od');
const t1Parts3 = t1.split('z');
console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

const t2 = 'Kultivatorius';
const t2Parts = t2.split('t');

console.log(t2Parts);

// charCodeAt

console.log('A'.charCodeAt(0));

const s1 = String.fromCharCode(1896);
console.log(s1);