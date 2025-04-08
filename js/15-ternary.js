let zodis = ''

if (4>2) {
    zodis = 'Daugiau'
}
else {
    zodis = 'Maziau'
}
console.log(zodis);

//klausimas ? teigiamas : neigiamas
const word = (1 > 2) ? 'Daugiau' : 'Maziau';
console.log(word);

const number = 7 <= 5 ? 7 : 5;
console.log(number);

const years = 22
const isAdult = years >= 18 ? 'Suaugęs' : 'Nepilnametis';

console.log(isAdult);
// Visi skaiciai pocityvus
//iskirus nulis
if (0) {
    console.log('Taip');
} else {
   console.log('Ne');
}

// Visi tekstai yra pozityvus
//iskirus - tuscias tekstas
if ('') {
    console.log('Taip');
} else {
   console.log('Ne');
}

// Visi array yra pozityvus
if ([]) {
    console.log('Taip');
} else {
   console.log('Ne');
}

// Visi object yra pozityvus
if ({}) {
    console.log('Taip');
} else {
   console.log('Ne');
}

// Undefined yra neigiamas
if (undefined) {
    console.log('Taip');
} else {
   console.log('Ne');
}

// Null yra neigiamas
if (null) {
    console.log('Taip');
} else {
   console.log('Ne');
}