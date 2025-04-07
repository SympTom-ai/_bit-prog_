/* funkcija gauna sakini , kuris atrodo taip:
'Studentai: joanas, Maryte, peTras, ONA.'
FUnkcijos darbas grazinti teisingai perrasyta sakini.
*/

let stundets = 'Siuo metu klaseje yra: jonas, Maryte, peTras, ONA.';

function correctSentence(stundets) {
    const parts = stundets.split(': ');
    const names = parts[1]
    .slice(0, -1)
    .toLowerCase()
    .split(', ');
    console.log(names);
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstletters = name[0].toUpperCase();
        const restletters = name.slice(1);
        const NewNames= firstletters + restletters;
        names[i] = NewNames;
    }
    return parts[0] + ': ' + names.join(', ') + '.';
}

console.log(correctSentence(stundets));