// hihi huhu
console.log('Hello world!');
let hihi = 'haha';
console.log(hihi);
// variable nimi peab olema tähenduslik, ei saa alata numbriga, ei saa sisaldada sidekriipsu või tühikut
let interestRate = 0.3; 
interestRate = 0.1;
console.log(interestRate);
//let muutujat saab muuta!
//  const interestRateUus = 0.3;
//  interestRateUus = 1;
//  console.log(interestRate);
//consti ei saa muuta, tuleb error :))
//kaks type'i: primitive ja reference
//primitiivsed data typed: (bigint ja symbol pole siin käsitletud)
let muutuja = 8; //string literal
let age = 22; //number literal
let yesOrNo = true //boolean literal
let firstName = undefined; //muutuja, millel on nimi olemas, aga väärtust mitte
let lastName = null; //muutuja, mille väärtus on 0 
//javascript on dynamic language ehk variablede abil saab muuta eelnevalt kirjutatud koodi tulemust
// kõik numbrid on lihtsal number, ei ole floati ja inti
let person = { //variable mitme muutujaga
  name: 'Hele',
  age: 22
};
console.log(person)
person.name = 'Tume'; // punktiga saab täpsustada ja muuta muutujaid muutuja sees
console.log(person.name);
console.log(person)
// saab kasutada ka nurksulge. peaks üle vaatama eelised
let selection = 'name';
person[selection] = 'Värvitu'
console.log(person)
//arrayd (järjekord algab alati nulliga!!)
let selectedColors = ['red','blue']
console.log(selectedColors[1]) //näitab nimekirjas teist elementi
selectedColors[2] = 'green';
console.log(selectedColors)
//arrays võib olla nii stringe kui ka numbreid (ja ma eeldan, et muud kraami ka. array type (typeof selectedColors) on object (nagu nullväärtuse puhul!!)
console.log(selectedColors.length) //annab, mitu elementi on arrays
// % on jääk ja ** on astendamine
//shift ja backspacest vasakul olev klahv annavad backticki ``. backticki saab kasutada samaväärsena ' ja "" ga. lisaks saab backtickide sees luua dünaamilisi variable, mis iganes need on
function greet() { //aga console log function ei ole eriti lahe
  console.log('Tere, maailm!')
}
greet();

function greet(name) {
  console.log('Tere, ' + name);
}

greet('Hele')

function greet(name, lastName) {
  console.log('Tere, ' + name + ' ' + lastName)
}
greet('Hele', 'Tume') //aga kui siia sisestada vaid üks argument, siis teine tuleb undefined (mis on default value)

//arvutamise funktsioon
function square(number){
  return number * number
}

let number = square(2)
console.log(number)