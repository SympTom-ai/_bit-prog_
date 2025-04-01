function empty() {
 // Logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

console.log (empty());

function penki() {
    return 5;
}
console.log(penki());

const c = penki();
console.log(c);

function hi() {
    return 'Labas';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonai!
// Maryte-> Labas, Maryte!
// Arminas -> Labas, Arminai!

function hiperson(name) {
    return `Labas, ${name}!`;
}

console.log(hiperson('Jonas'));
console.log(hiperson('Maryte'));
console.log(hiperson('Arminas'));

function sum(num1, num2) {
    return num1 + num2;
}

const e = sum(2,2);
console.log(e);

const f = sum(22, 33);
console.log(f);

const g = sum(-456 * 10, 777);
console.log(g);
 console.clear();

 /*
 100 -> 121 Eur
 200 -> 242 Eur
 73 -> 83.33 Eur
 */

 function priceWithVat(price) {
    const updatedprice = price * 1.21;
     return updatedprice + ' Eur';
 }

 const p1 = priceWithVat(100);
 console.log(p1);

 const p2 = priceWithVat(200);
 console.log(p2);

const p3 = priceWithVat(73);
console.log(p3);

console.clear();

// Jonas -> Zodis "Jonas" yra sudarytas is 5 raidziu.
// Petras -> Zodis "Petras" yra sudarytas is 6 raidziu.
// Maryte -> Zodis "Maryte" yra sudarytas is 6 raidziu.

function namelength(name) {
    const size = name.length;
return `Zodis "${name}" yra sudarytas is ${name.length} raidziu.`;
}

const n1 = namelength('Jonas');
console.log(n1);
const n2 = namelength('Petras');
console.log(n2);
const n3 = namelength('Maryte');
console.log(n3);
console.clear();

//5 -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.
//333 -> Gautas skaicius: 333.

function gotNumber(number) {
// return 'Gautas skaicius: ' + number + '.';
return `Gautas skaicius: ${number}.`;
}

const h1 = gotNumber(5);
console.log(h1);
const h2 = gotNumber(-13);
console.log(h2);
const h3 = gotNumber(333);
console.log(h3);

console.clear();

// 2,2    ->2 + 2 = 4.
// 3,5    ->3 + 5 = 8.
// -1,6   ->-1 + 6 = 5.

function sum2(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}.`;
}

const s1 = sum2(2, 2);
console.log(s1);
const s2 = sum2(3, 5);
console.log(s2);
const s3 = sum2(-1, 6);
console.log(s3);

//ND perdarity analogiskai su-, * ir / operecijomis 

console.clear();

function sum3(c, d) {
    const result = c * d;
    return `${c} * ${d} = ${result}.`;
}

const a1 = sum3(2, 2);
console.log(a1);
const a2 = sum3(3, 5);
console.log(a2);
const a3 = sum3(-1, 6);
console.log(a3);


function sum4(e, f) {
    const result = e / f;
    return `${e} / ${f} = ${result}.`;
}

const b1 = sum4(2, 2);
console.log(b1);
const b2 = sum4(3, 5);
console.log(b2);
const b3 = sum4(-1, 6);
console.log(b3);

 function sum(a, b) {
    return a +b
}
 
const value = sum(1, 2);
console.log(value); 