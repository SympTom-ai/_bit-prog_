/*
BOOLEAN - logine reiksme
- true
- false
loginiai operatoriai
-&& - and (ir)
- || - or (arba)
*/


const iseven = true;
const isOdd = false;

const a = true && true;
console.log(a); // true
 console.log(true && false);
    console.log(false && true);
console.clear();

    console.log(true || false);
    console.log(false || true);
    console.log(false || false);
    console.log(true || true);

    console.clear();

    const arGrazus = false;
    const arTurtinas = true;

    console.log(arGrazus && arTurtinas);
    console.log(arGrazus || arTurtinas);

    // ND surasyti visas imanomas kombinacijas su && ir || kai yra naudojamos 4 boolean reiksmes.
    // ND kiek gavosi kombinaciju ?

    console.log(true && true && true && true);
    console.log(true && true && true && false);
    console.log(true && true && false && true);
    console.log(true && false && true && true);
    console.log(false && true && true && true);
    console.log(true && true && false && false);
    console.log(true && false && false && true);
    console.log(false && true && true && false);
    console.log(true && false && true && false);
    console.log(false && true && false && true);
    console.log(false && false && true && true);
    console.log(true && false && false && false);
    console.log(false && true && false && false);
    console.log(false && false && true && false);
    console.log(false && false && false && true);
    console.log(false && false && false && false);
    console.log(true || true || true || true);
    console.log(true || true || true || false);
    console.log(true || true || false || true);
    console.log(true || false || true || true);
    console.log(false || true || true || true);
    console.log(true || true || false || false);
    console.log(true || false || false || true);
    console.log(false || true || true || false);
    console.log(true || false || true || false);
    console.log(false || true || false || true);
    console.log(false || false || true || true);
    console.log(true || false || false || false);
    console.log(false || true || false || false);
    console.log(false || false || true || false);
    console.log(false || false || false || true);
    console.log(false || false || false || false);
    // 32 kombinacijos

    console.log(true && true && true || true);
    console.log(true && true && true || false);
    console.log(true && true && false || true);
    console.log(true && false && true || true);
    console.log(false && true && true || true);
    console.log(true && true && false || false);
    console.log(true && false && false || true);
    console.log(false && true && true || false);
    console.log(true && false && true || false);
    console.log(false && true && false || true);
    console.log(false && false && true || true);
    console.log(true && false && false || false);
    console.log(false && true && false || false);
    console.log(false && false && true || false);
    console.log(false && false && false || true);
    console.log(false && false && false || false);
    console.log(true || true || true && true);
    console.log(true || true || true && false);
    console.log(true || true || false && true);
    console.log(true || false || true && true);
    console.log(false || true || true && true);
    console.log(true || true || false && false);
    console.log(true || false || false && true);
    console.log(false || true || true && false);
    console.log(true || false || true && false);
    console.log(false || true || false && true);
    console.log(false || false || true && true);
    console.log(true || false || false && false);
    console.log(false || true || false && false);
    console.log(false || false || true && false);
    console.log(false || false || false && true);
    console.log(false || false || false && false);
    // 32 kombinacijos

    console.log(true && true || true && true);
    console.log(true && true || true && false);
    console.log(true && true || false && true);
    console.log(true && false || true && true);
    console.log(false && true || true && true);
    console.log(true && true || false && false);
    console.log(true && false || false && true);
    console.log(false && true || true && false);
    console.log(true && false || true && false);
    console.log(false && true || false && true);
    console.log(false && false || true && true);
    console.log(true && false || false && false);
    console.log(false && true || false && false);
    console.log(false && false || true && false);
    console.log(false && false || false && true);
    console.log(false && false || false && false);
    console.log(true || true && true || true);
    console.log(true || true && true || false);
    console.log(true || true && false || true);
    console.log(true || false && true || true);
    console.log(false || true && true || true);
    console.log(true || true && false || false);
    console.log(true || false && false || true);
    console.log(false || true && true || false);
    console.log(true || false && true || false);
    console.log(false || true && false || true);
    console.log(false || false && true || true);
    console.log(true || false && false || false);
    console.log(false || true && false || false);
    console.log(false || false && true || false);
    console.log(false || false && false || true);
    console.log(false || false && false || false);
    // 32 kombinacijos

    // 32 + 32 + 32 = 96 kombinacijos