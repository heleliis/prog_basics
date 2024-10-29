function isEven(number) {
  return number % 2 === 0 ? true : false;
}
// see oli vot see ternary statement asi

function add(x, y) {
  return x + y;
}

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}
// ka ternary ja huvitav vaatenurk

//globaalsed ja lokaalsed muutujad :))

function function1() {
  let x = 1;
  console.log(x);
}

function function1() {
  let x = 2;
  console.log(x);
}

// siin need asjad ei häiri üksteist, sest muutujad on defineeritud funktsioonide sees. aga kui oleks global variable x=3 ja local variable x=1, siis läheks kasutusele local.

function hello(callback) {
  console.log("Hello");
  callback();
}

function leave() {
  console.log("leave");
}

function goodbye() {
  console.log("Goodbye");
}

//---

function sum(callback, x, y) {
  let result = x + y;
  callback(result); //callback on nagu funktsioon funktsiooni sees
}

function displayConsole(result) {
  console.log(result);
}

sum(displayConsole, 1, 2); //tulemus on 3. selle peab labi motlema

//---

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function double(element, index, array) {
  array[index] = element * 2; // consoletakse 2, 4, 6, 8, 10
}

function display(element) {
  console.log(element); // consoletakse 1, 2, 3, 4, 5
}

// Math.pow( saab astmeid leida. .charAt(0 või mis iganes number) võtab vastaval kohal oleva tähe

//---

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase(); // terve list tuleb suure algustähega
}
function display(element) {
  console.log(element);
}

//---
//.map() accepts a callback and appölies that function to each element of an array, then returns a new array

const students = ["Spongebob", "Patrick", "Sandy"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper); // array on nyyd uppercases

function upperCase(element) {
  return element.toUppercase();
}

//erinevus forEachiga - forEach muudab arrayd ennast ka, map mitte. map teeb koopia olemasolevast arrayst

// .filter() creates a new array by filtering out elements. oluline näiteks e-poes toodete filtrite tegemisel.

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element) {
  //tuleb uus array ainult paarisarvudega
  return element % 2 === 0;
}

//--- .reduce() reduces the elements of an array to a single value

const prices = [5, 30, 10, 25];
const total = prices.reduce();
console.log(`$${total.toFixed(2)}`) //whatever the hell is going on here. see peaks siis kuidagi kuvama selle info?? but wth.

function sum(accumulator, element){
  return accumulator + element;
}

// function declaration - define a reusable block of code that performs a specific task

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
  return Math.pow(element, 2);)}

console.log(squares);

// arrow functions - a concise way to write function expressions. good for simple functions that you use only once.

const hello = (name) => console.log(`Hello ${name}`
  console.log(`You are  ${age} years old`)
)

hello("bro", 25)

//veel naiteks

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));