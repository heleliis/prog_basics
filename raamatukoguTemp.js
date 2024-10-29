let books = [
  "War and Peace",
  "The Great Gatsby",
  "Moby Dick",
  "To Kill a Mockingbird",
  "Pride and Prejudice",
];

let temperatures = [18, 21, 19, 22, 20, 17, 16];

let numberOfBooks = books.length;
console.log(numberOfBooks);

let shortestBookName = books.reduce((accumulator, currentValue) => {
  return accumulator < currentValue ? accumulator : currentValue;
});
console.log(shortestBookName);

let sortAlphabetically = books.sort();
console.log(books);

let includesGatsby = books.includes("The Great Gatsby");
console.log(includesGatsby);

let value = 20;
let largerThanValue = temperatures.filter((temperature) => temperature > value);
console.log(largerThanValue);

let total = temperatures.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
let average = total / temperatures.length;
console.log(average);

let fahrenheit = temperatures.map((temperature) => (temperature * 9) / 5 + 32);
console.log(fahrenheit);

let descending = temperatures.sort((current, next) => next - current);
console.log(descending);
