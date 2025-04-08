const symbols = {};
let max = 0
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}

console.log(max);