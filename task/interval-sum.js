function intervalSum(start, end) {
    let sum =0;

    for(let i = start;i  <= end; i++) {
        sum +=i;
    }
    return sum;
}

console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(30, 0));
console.log(intervalSum(-6, 8));
console.log(intervalSum(-25, -10));
console.log(intervalSum(194, 59));
