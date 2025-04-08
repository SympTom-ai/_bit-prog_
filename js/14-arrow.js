const n1 = 7;
const n2 = 5;

function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);


function minus(a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);



const multi = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

function sqr(a) {
    return a * a;
}
console.log(`${n1} * ${n1} = ${sqr(n1)}`);

const correctName = (name) =>name[0].toUpperCase() + name.slice(1).toLowerCase();
console.log(correctName('joNas'));
console.log(correctName('maRYte'));

//Funkcija, kuri gauna zodi ir grazina atvirksciai
function reverseString(text) {
    return text.split('').reverse().join('');
}

console.log(reverseString('labas'));
console.log(reverseString('kebabas'));
console.log(reverseString('alus'));