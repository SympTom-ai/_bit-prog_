/*
Reikalinga funkcija , kuri gauna teskta, kuri grazina rezultata, priklausomai nuo teksto ilgio:
- Jei tuscias:"Tuscias tekstas."
- Jei maziau nei 10 simboliu: "trumpas tekstas is n simboliu."
- Jei maziau nei 20 simboliu: "tekstas is N simboliu."
- Jei ilgesnis: "Ilgas tekstas is N simboliu."
*/

function textSize () {
    if(textSize.length === 0) {
    return 'Tuscias tekstas is N simboliu.';
}

   if(textSize.lenght < 10){
return 'Trumpas tekstas is N simboliu.';
}

if (textSize.length < 20) {
    return 'Tekstas is N simboliu.';
}
return 'Ilgas tekstas is N simboliu'

}
console.clear();

console.log(textSize(''));
console.log(textSize('Labadiena'));
console.log(textSize('SuVistiena'));
console.log(textSize('Labassafasffaffafasffdggf'));
console.log(textSize(''));

function textsize4(text) {
    if (text.length > 20) {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }
    if (text.length >= 10 ) {
        return `Tekstas is ${text.length} simboliu.`;
    }
    if (text.length ===0) {
        return `Tuscias tekstas is ${text.length} simboliu.`
    }

}