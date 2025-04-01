/*
ARRAY - sarasas , Arejus, matrica, masyvas,list'as,
*/

const empty = [];
console.log(empty);

const luckynumbers = [7, 77, 777, 13, 666, 8, 2]
console.log(luckynumbers);

const students = ['Jonas', 'Maryte', 'Petras',];
console.log(students);

const firstnumber = luckynumbers[0];

console.log(firstnumber);

console.log(luckynumbers[0]);
console.log(luckynumbers[1]);
console.log(luckynumbers[2]);
console.log(luckynumbers[3]);

console.clear();

const vardai = ['a', 'b',]

console.log(vardai[1]);

const numbers = [10, 6, 4, 2]
const totalsum1 = numbers[0] + numbers[1] + numbers[3] + numbers[2];
console.log(totalsum1);

let totalsum2 = 0

totalsum2 = totalsum2 + numbers[2];
console.log(totalsum2);

let totalsum3 = 0
totalsum3 += numbers[0]
totalsum3 +=numbers[1]
totalsum3 += numbers[2]
totalsum3 += numbers[3]
totalsum3 += numbers[4]

console.log(totalsum3);

console.clear();

const dictionary =['pomidoras', 'agurkas','bulve','kevyras','druska',]
//patiekalui reikes: a, b ,c ,d
const sentence1 = 'Patiekalui reikes: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ', ' + dictionary[4] + '.';
console.log(sentence1);

let sentence2 = 'Patiekalui reikes:';
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[1] + ', ';
sentence2 += dictionary[2] + ', ';
sentence2 += dictionary[3] + ', ';
sentence2 += dictionary[4] + '.';


console.log(sentence2);

let index = 0
let sentence3 = 'Patiekalui reikes:';

sentence3 += dictionary[index] + ', ';
index += 1;

sentence3 += dictionary[index] + ', ';
index += 1;

sentence3 += dictionary[index] + ', ';
index += 1;

sentence3 += dictionary[index] + ', ';
index += 1;

sentence3 += dictionary[index] + ', ';
index += 1;

console.log(sentence3)  

let k = 0
k = k + 1;
k += 1;
k++;
++k;

let i = 0;

let sentence4 = 'Patiekalui reikes:';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);

let h = -1
let sentence5 = 'Patiekalui reikes:';
sentence5 += dictionary[++h] + ', ';
sentence5 += dictionary[++h] + ', ';
sentence5 += dictionary[++h] + ', ';
sentence5 += dictionary[++h] + ', ';
sentence5 += dictionary[++h] + '.';
console.log(sentence5);
