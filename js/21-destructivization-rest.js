const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10];
const a3 = [11, 12, 13, 14, 15];
const a4 = [16, 17, 18, 19, 20];

// [11111, 22222]

const a12 = a1.concat(a2);
console.log(a12);

const b = [...a1, ...a2, ...a3, ...a4];
console.log(b);

const c = [7, ...a1, 8, ...a2, 9, ...a3, 10, ...a4];
console.log(c);
console.clear();

const o1 = {name: 'Tomas'};
const o2 = {age: 24};
const o3 = {isMarried: false};

const o4 = { ...o1, ...o2, ...o3};
console.log(o4);

const p = {a: 1};
const p2 = {b: 2};
const p3 = {c: 3, a: 7};

const p12 = {...p, ...p2};
console.log(p12);

const p123 = {...p, ...p2, ...p3};
console.log(p123);

const p1243 = {...p3, ...p2, ...p};
console.log(p1243);

const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest] = marks;

console.log(first)
console.log(second)
console.log(rest)

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const n1 = names[0]
const n2 = names.slice(2);

console.log(n2);

const [x, y, ...z] = names;
console.log(x);
console.log(y);
console.log(z);

const students = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

for (let i = 0; i < students.length; i++) {
    const { name, age } = students[i];
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.log('------------------');

for (const student of students) {
    const { name, age } = student;
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.log('------------------');

for (const { name, age } of students) {
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.clear();

const numbers = [
    [0],
    [1, 11],
    [2, 22, 222],
    [3, 33, 333, 3333],
    [4],
    [5],
    [6],
];

// Pirmas skaicius yra X ir dar yra Y papildomu skaiciu.

for (const [first, ...rest] of numbers) {
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaiciu.`;
    console.log(result);
}

Math.min(1)
Math.min(1, 2, 3)

function min(...list) {
    let minimum = Infinity;
    for(const numbers of list) {
        if (numbers < minimum) {
            minimum = numbers;
        }
    }
return minimum;
}

console.log(min(1));
console.log(min(1, 2, 3, 4));
console.log(min(-1,-2,-3));
console.log(min(-1,-2,-3, -2, -5));

const aa = [1, 2, 3];
console.log(Math.min(...aa))
console.log(Math.max(...aa))

const f = [...aa]
console.log(f);


