/*
Reikalinga funkcija , kuri gauna vartotojo amziu (metais) ir atitinkamai grazina zodi:
- suauges
- vaikas
Amziaus ribos kriterijus: >= 18 metu.
*/

function isAdult(age) {
    if (age >= 18){
        return 'Suauges';
    } else {
        return 'Vaikas';
    }
}


console.log(isAdult(20), '--->', 'Suauges');
console.log(isAdult(26), '--->', 'Suauges');
console.log(isAdult(15), '--->', 'Vaikas');