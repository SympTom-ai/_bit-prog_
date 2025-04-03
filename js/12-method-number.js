// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.log(parseInt('65'))
console.log(parseInt('65.456'))
console.log(parseInt('-65.456'))
console.log(parseInt('-65'))

console.log(parseInt('Labas'))
console.log(parseInt('256Labas'))
console.log(parseInt('256Labas1651'.replace('Labas', 56)))
console.log(parseInt('256Labas1651'.replace('Labas', '')))

const a = 12.89456
console.log(a)
console.log(typeof a);

console.log(typeof typeof a);
console.log(typeof 'number');
console.log('string');

const b = a.toFixed(4)
console.log(b)
console.log(typeof b)

const c = parseFloat(b)
console.log(c)
console.log(typeof c)



