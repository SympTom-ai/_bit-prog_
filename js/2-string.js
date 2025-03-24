/*
String - tekstas,simboliu seka

Specelieji simboliai:
- \ (backslash) - "pabegimo simbolis"
- \n - "new line" - nauja eilute
- \t - "tab" - tabuliacija
- \u - "unicode" - unikodas
- \n - "new line" - nauja eilute
- \r - "carriage return" - grizimas i eilutes pradzia
- ` - backtick - "backtick" kabutes
*/

const a='labas';
console.log(a);

let b = 'rytas';
console.log(b);

b='vakaras';
console.log(b);



//Viengubos kabutes (')
const k1 = "Vienguba (') kabute.";
console.log(k1);

//Dvigubos kabutes (")
const k2 = 'Dviguba (") kabute.';
console.log(k2);

//Vienguba (') ir dviguba (") kabutes.
const k3 = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(k3);

//Viengubos kabutes (')
const k4 = 'Vienguba (\') kabute.';
console.log(k4);

//Dvigubos kabutes (")
const k5 = "Dviguba (\") kabute.";
console.log(k5);

//Vienguba (') ir dviguba (") kabutes.
const k6 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(k6);

const surname = "Petraitis";
const name = "Petras"; 


const fullName = name + ' ' +surname;
console.log(fullName);

const backSlash = '\\';
console.log(backSlash);

const backSlash2 = "\\\\";
console.log(backSlash2);

console.clear();

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/
 
const HTML = '<header>\r\
    <img>\r\
    <nav>\r\
        <a></a>\r\
        <a></a>\r\
        <a></a>\r\
    </nav>\r\
</header>';
console.log(HTML);

const HTML2 = '<header>\r\n\
    <img>\r\n\
    <nav>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
    </nav>\r\n\
</header>';
console.log(HTML2);

const HTML3 = `<header>
\t\t\t<nav>
\t<a></a>\r\
\t<a></a>\r\
\t<a></a>\r\
\t\t\t<img>\n\
</header>`;
console.log(HTML3);

const HTML4 = `<header>\r\
\t\t\t<nav>\n\
\t<a></a>\r\
\t<a></a>\r\
\t<a></a>\r\
\t\t\t<img>\n\
</header>`;
console.log(HTML4);

console.clear();
 const studentName = 'Jonas';
const amount = 9;
 // Jonas yra vienas is 9 legendiniu kariu.

const student = studentName + ' yra vienas is ' + amount + ' legendiniu kariu.';
console.log(student);
 console.clear();

 const b1 = `Vienguba kabute (').`;
console.log(b1);

const b2 = `Dviguba kabute (").`;
console.log(b2);

const b3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(b3);

const b4 = `Vienguba (\`) kabute.`;
console.log(b4);    

const b7 = `<header>
\t\t\t<nav>
\t<a></a>\r\
\t<a></a>\r\
\t<a></a>\r\
\t\t\t<img>\n\
</header>`;
console.log(b7);
 console.clear();

 const student2 = `${studentName} yra vienas is ${amount} legendiniu kariu.`;
 console.log(student2);
 
const demo = `Labas, ${studentName}.`;
console.log(demo);
 console.clear();

 const word = 'Labas';
 const wordSymbolCount = word.length;

console.log(word);
console.log(wordSymbolCount);

const firstLetter = word[0];
console.log(firstLetter);

const secondLetter = word[1];
console.log(secondLetter);

const thirdLetter = word[2];
console.log(thirdLetter);

const fourthLetter = word[3];
console.log(fourthLetter);

const fifthletter = word[4];
console.log(fifthletter);

console.log(word[0] + word[1] + word[2] + word[3] + word[4]);


const age = 88;
const ageDigitCount = ('' + age).length;
console.log(ageDigitCount);

const ageDigitCount2 = age.toString().length;
console.log(ageDigitCount2);
    console.clear();

// Zodyje Sahmatai pirmoji raidel yra S, o paskutine yra i.
 const game = 'kvadratas';
 const gameSentence = `Zodyje "${game}" pirmoji raide yra "${game[0]}" o paskutine raide yra "${game[game.length - 1]}".`;

    console.log(gameSentence);


