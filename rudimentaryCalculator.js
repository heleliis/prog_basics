let firstNumber = prompt('Sisesta esimene number:');
let secondNumber = prompt('Sisesta teine number:');
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

function printOutput(x, operation, y, result) {
  const operationSign = getOperationSign(operation);
  alert(x + " " + operationSign + " " + y + " = " + result);
}

const validOperations = ["a", "s", "m", "d", "e", "r"];

function getOperation() {
  let operation = prompt('Tehte liik: (a/s/m/d/e/r)')

  if (validOperations.includes(operation)) {
    return operation
  } else {
    alert("Unknown operation")
  }
}

function getOperationSign(operation) {
  switch (operation) {
    case "a":
      return "+";
    case "s":
      return "+";
    case "m":
      return "*";
    case "d":
      return "/";
    case "e":
      return "**";
    case "r":
      return "%";
    default:
      alert("Unknown operation")
  }
}

function getResult(operation) {
  switch (operation) {
    case "a":
      return firstNumber + secondNumber;
    case "s":
      return firstNumber - secondNumber;
    case "m":
      return firstNumber * secondNumber;
    case "d":
      return firstNumber / secondNumber;
    case "e":
      return firstNumber ** secondNumber;
    case "r":
      return firstNumber % secondNumber;
    default:
      alert("Unknown operation")
  }
}

const operation = getOperation()
const result = getResult(operation)
printOutput(firstNumber, operation, secondNumber, result)



let sum = firstNumber + secondNumber;



//document.write('Sisestatud arvude summa on ' + sum + '.');