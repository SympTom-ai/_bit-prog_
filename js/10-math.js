console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);


// abs - Absolute
console.log('\nabs');
console.log(Math.abs(5));
console.log(Math.abs(-5));

// cbrt - Cubic Root
console.log('\ncbrt');
console.log(Math.cbrt(5));
console.log(Math.cbrt(-5));
console.log(Math.cbrt(45));
console.log(Math.cbrt(92));

//ceil - ceiling 
console.log('\nceil');
console.log(Math.ceil(9));
console.log(Math.ceil(32.9));
console.log(Math.ceil(32.000001));

//floor  
console.log('\nfloor');
console.log(Math.floor(9));
console.log(Math.floor(32.9));
console.log(Math.floor(32.000001));
console.log(Math.floor(5456.221))
console.log(Math.floor(7.112));

//round  
console.log('\nround');
console.log(Math.round(9));
console.log(Math.round(32.9));
console.log(Math.round(32.000001));
console.log(Math.round(5456.221))
console.log(Math.round(7.112787));

//hypot  
console.log('\nhypot');
console.log(Math.hypot(9, 5));
console.log(Math.hypot(32.9, 6));
console.log(Math.hypot(3, 2));
console.log(Math.hypot(5456.221, 3))
console.log(Math.hypot(7, 2));

//max
console.log('\nmax');
console.log(Math.max(5, 6, 9, 3))

//min
console.log('\nmmin');
console.log(Math.min(5, 6, 9, 3))

//pow  
console.log('\npow');
console.log(Math.pow(9, 5));
console.log(Math.pow(32.9, 6));
console.log(Math.pow(3, 2));
console.log(Math.pow(5, 3))
console.log(Math.pow(7, 2));

//sign  
console.log('\nsign');
console.log(Math.sign(9 ));
console.log(Math.sign (-6));
console.log(Math.sign(3));
console.log(Math.sign( -3))
console.log(Math.sign( 2));

const a = -649

if (Math.sign(a) ===1) 
    console.log('+++',a);
else 
console.log('---', a * -1);

// random [0..1]
console.log('\nrandom');
console.log(Math.random(9, 5));
console.log(Math.random(32.9, 6));
console.log(Math.random(3, 2));
console.log(Math.random(5, 3))
console.log(Math.random(7, 2));

console.clear();

let count3 = 0
let count7 =0
for (let i = 0; i < 69; i++) {
    if (Math.random() < 0.5) {
       count3++;
    } else {
        count7++
    }
}
console.log(count3, count7);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));

console.log('---------')

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10000; i++);{
    const index = (randomNumber(0, 1));
    counts[index]++
}

console.log(counts);

console.clear();

function arg (){
    let a = 2; // Initialize 'a' with a value
    a = 2;  // Square the value of 'a'
    return a**2;  // Return the squared value
}
console.log(arg());

items = ["a", "b", "c", "d"]
items.push

console.log(items);

function getMax1()
{
  var max = 'name' + ':' + 'Max Headroom';
  return max;
}

function getMax2()
{
  return 'name' +':' + 'Max Headroom'
}

console.log(getMax1());
console.log(getMax2());

function disemvowel(str) {
   let str1 = str.replace(/[aeiou]/gi, '');
   return str1;
  }

console.log(disemvowel('This website is for losers LOL!'));

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return name + " you are playing banjo!";
    } else {
        return name + " you are not playing banjo!";
    }
}

