for (let b = 0; b<= 100; b++) {
    console.log(b / 4);
    if (!isFinite(b)) {
        return 'Reikalingas normalus skaicius.';
    }
    if (b < 0) {
        count--;
    }
    const numerisAsString = '' + b;
    let count = numerisAsString.length;
}

function checkNumber(num) {
    if (num >= 0) {
        return 'Skaicius yra teigiamas';
    } else {
        console.log('Skaicius yra neigiamas.');
    }
}

// Corrected function call

console.clear();

let num = (1,1,2,3,3,3,4)
function checkNumber(num) {
    if (num >= 0) {
        return 'Skaicius yra teigiamas';
    } else {
        console.log('Skaicius yra neigiamas.');
    }
}


console.clear();

function reverseWords(str){
    let result = 0;
    
    for (let i =0; i<str.length; i++){
        result += str[str.length -i];
    }
  return result; // reverse those words
}
console.log(reverseWords(1 ,1,2,3,3,3,4));