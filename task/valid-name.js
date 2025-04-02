/*
Funkcija, kuri gavusi zodi, is jopadaro korektiskavarda.
*/

function validName(name) {
    const firstletters = name[0].toUpperCase();
    const restletters = name.slice(1).toLowerCase();

    return firstletters + restletters;
}

console.log(validName('jonas'), '--->', 'Jonas')
console.log(validName('maryte'), '--->', 'Maryte')
console.log(validName('pEtRaS'), '--->', 'Petras')
console.log(validName('toMaS'), '--->', 'Tomas')
console.log(validName('jonas'), '--->', 'Jonas')