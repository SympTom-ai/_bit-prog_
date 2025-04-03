// 3 --> 3.00 Eur

function moneyformat(money) {
    return money.toFixed(2) + 'Eur'
    ;}
    
    function moneyformat2(money){
        //is 'money' reikia gauti dali po kablelio
        const decimlPart = money - Math.floor(money);
        //kiek yra skaitmenu po kablelio

        // jeigu po kablelio yra 2 skaitmenys - nieko daryti nereikia
        /*if (decimlPart === 0) {
            return money + '.00 Eur';
        }
        return 0;*/

        //Jeigu po kablelio yra 1 skaitmuo - pridedame 1 nuli
        if (decimlPart % 10 ===0){
            return money + '0 Eur'
        }
    }
console.log(moneyformat(3))
console.log(moneyformat(3.24))
console.log(moneyformat(3.99))
console.log(moneyformat(3.45))

console.log(moneyformat2(3))
console.log(moneyformat2(3.24))
console.log(moneyformat2(3.99))
console.log(moneyformat2(3.45));
