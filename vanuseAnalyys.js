const users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Jane", age: 35 },
  { name: "Tom", age: 40 },
  { name: "Sara", age: 29 },
];

let value = 25;
let isOlderThan25 = users.filter((user) => user.age > value);
console.log(isOlderThan25);

let addIsAdultField = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));
console.log(addIsAdultField);

addIsAdultField.forEach((user) => {
  console.log(`Name: ${user.name}, is adult: ${user.isAdult}`);
});

let total = users.reduce(
  (accumulator, currentValue) => accumulator + currentValue.age,
  0
);
let logUser = total / users.length;
console.log(logUser);
