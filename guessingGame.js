const randomNumber = Math.floor(Math.random() * 100 + 1);
let guessedNumber;
let rightGuess = false;
let guessesMade = 0;

while (guessesMade < 11 && rightGuess === false) {
  guessesMade++;
  guessedNumber = prompt("Sisesta number 1-100.");
  let convertedGuessedNumber = parseInt(guessedNumber);
  if (guessedNumber == randomNumber) {
    alert("Arvasid numbri ära!");
    rightGuess = true;
  } else if (guessedNumber < 1 || guessedNumber > 100 || guessedNumber === "") {
    alert("Sisesta sobiv number.");
    guessesMade--;
  } else if (guessedNumber < randomNumber) {
    alert("Õige vastus on suurem kui " + convertedGuessedNumber + ".");
  } else if (guessedNumber > randomNumber) {
    alert("Õige vastus on väiksem kui " + convertedGuessedNumber + ".");
  } else {
    alert("Sisesta sobiv number.");
    guessesMade--;
  }
}

if (guessesMade > 10) {
  alert("Sa ei arvanud numbrit ära.");
}
