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
