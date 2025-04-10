const day = 1;
let dayName = '';

if(day ===1) {
    dayName = 'pirmadienis'
}else if (day === 2) {
    dayName = 'antradienis';
}

console.log(dayName);

const d = 89
let weekdayName = ''
switch(d) {
    case 1:
        weekdayName = 'pirmadienis';
        break;
    case 2:
        weekdayName = 'antradienis';
        break;
    case 3:
        weekdayName = 'treciadienis';
        break;
    case 4:
        weekdayName = 'ketvirtadienis';
        break;
    case 5:
        weekdayName = 'penktadienis';
        break;
    case 6:
        weekdayName = 'sestadienis';
        break;
    case 7:
        weekdayName = 'sekmadienis';
        break;
        default:
            weekdayName = 'Tokios dienos nera'
            break;
}

console.log(weekdayName);

const teaStep = 1

switch (teaStep) {
    case 1:
        console.log('uzvirinti vandeni');
    case 2:
        console.log('i puodeli isideti arbatos');
    case 3:
        console.log('isideti cukraus/saldikliu');
    case 4:
        console.log('ipilame vandeni');
    case 5:
        console.log('issimaisyti');
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('toks veiksmas nenumatytas');
        break;
}

console.clear();

const stop = 'Rudens 2';

switch (stop) {
    case 'Parko': console.log('Parko');
    case 'Geniu': console.log('Geniu');
    case 'Tremtiniu': console.log('Tremtiniu');
    case 'Rudens': console.log('Rudens');
    case 'Mindaugo tiltas': console.log('Mindaugo tiltas');
    case 'Zaliasis tiltas': console.log('Zaliasis tiltas');
        break;
    case 'Lvovo': console.log('Lvovo');
    case 'Vasaros': console.log('Vasaros');
    case 'Rudens 2': console.log('Rudens 2');
    case 'Tremtiniu 2': console.log('Tremtiniu 2');
    case 'Geniu 2': console.log('Geniu 2');
    case 'Parko 2': console.log('Parko 2');
        break;
}