
const marks = [10, 20, 30, 40, 50];
let sum = 0;

for (let i=0; i <marks.length; i++) {
    const mark = marks[i];
    sum += mark;
}
console.log(sum);

let i = 0;
let sum2 = 0;

while (i < marks.length) {
    sum2 += marks[i];
    i++;
}
console.log(sum2);

let count = 0
let sum3 =0 
while (sum3 < 1000000) {
    sum3 += count++
}

console.log(count);
console.log(sum3);