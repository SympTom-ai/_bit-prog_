function intervalCount(start , end, divider) {
    let count = 0

    for (let i = start; i< end; i++)
        if (i % divider === 0){
            count++
        }
    return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} ir ${count} vienetai.`;
}
console.clear();

function intervalCount(start , end, divider) {
    let count = 0
    const truestart = start;


    for (let i = start; i< end; i++){
            count++
        }
    return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} ir ${count} vienetai.`;
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));

const a = 3.111
const b = a % 1

console.log(b);

const c = a - Math.floor
