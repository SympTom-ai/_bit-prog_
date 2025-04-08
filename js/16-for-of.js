const marks = [10, 20, 30, 40, 50];
let sum = 0;

for (let i=0; i <marks.length; i++) {
    const mark = marks[i];
    sum += mark;
}

console.log(sum);

let sum2 = 0;
for (const mark of marks) {
    sum2 += mark;
}
console.log(sum2);

const names = ['Tomas', 'Maryte', 'Jonas', 'Ona', 'Petras'];
const nameSizes = [];
for (const name of names) {
    nameSizes.push(name.length);
}
console.log(nameSizes);