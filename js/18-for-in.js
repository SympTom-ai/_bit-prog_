const symbols = {};
let max = 0
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}

console.log(max);

function checkForFactor (base, factor) {
    base >= 0
    if (base / factor)
      return true
     

  }
  console.log(checkForFactor(8,3))