function digitCount(n) {
    if(typeof n !== 'number'){
        return "reikalingas skaicius.";
    }

   // if (n === Infinity || n == -Infinity || isNaN(n)) {
    //    return 'Reikalingas normalus skaicius.';
   // }
    if (!isFinite(n)) {
        return 'Reikalingas normalus skaicius.';
    }
}

const numberAsString = '' + digitCount;
let count = numberAsString.length;



return count;


console.log(digitCount())
console.log(digitCount(undefined))
console.log(digitCount('sdfgg'))
console.log(digitCount('65562132'))
console.log(digitCount(true))
console.log(digitCount([]))
console.log(digitCount({}))
console.log(digitCount(digitCount))
console.log(digitCount(null))
