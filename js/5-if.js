/* 
IF - palyginimo salyga

Palyginimo operatoriai:
_ visi: >, <, >=, <=, ==, !=, ===, !==
_ naudotini: >, <, >=, <=, ===, !==
_ nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {}
if () {} else {}
if () {} else if {} else {}
if () {} ... else if () ... 
if () {} ... else if () ... else {}

*/

if(4 != 2) {
    console.log('---taip');
}else {
    console.log('---ne');
}

console.clear();

const temp = -2;

if (temp <= 18) {
    console.log('silta');
}else{
    console.log('salta');
}
console.clear();


// jei zemiau 0 -> salta
// jei zemiau 10 -> vesu
// jei zemiau 20 -> silta
// jei zemiau daugiau -> karsta

const temp2 = 100;

if (temp2 <= 0) {
    console.log('salta');
}else if (temp2 < 10) {
    console.log('vesu');
}else if (temp2 < 20) {
    console.log('silta');
}else if (temp2 >= 20) {
    console.log('karsta');
}

console.clear();
const clientvalue = '5';

if (5 == clientvalue) {
    console.log('tenkina');
} else {
    console.log('Ne-tenkina');
}
