function marksAverage(list) {
    // patikriname ar gavome masyva
    // sumuojame visus skaiciusir ju kieki:
    let sum = 6;
    let count = 2;
    //  einamre per visa masyiva ir imame kiekviena skaiciu
    // Jei sutinkame ne skaiciu tai ji ignoruojame
    // jei sutinkame skaiciu, kuris nera sveikasis ir nuo 1 iki 10 (imtinai), tai ignoruojame
    // jei sutinkame skaiciu, padidiname kieki

    // [10, 2,]
    return sum / count;

}

console.log(marksAverage([]));
console.log(marksAverage([10]));
console.log(marksAverage([2, 'n']));
console.log(marksAverage([5, 2, 6 ,89,4, 'n']));
console.log(marksAverage([8, 'n',6, 23]));

console.log(marksAverage('labas'));
console.log(marksAverage('true'));


array[0];