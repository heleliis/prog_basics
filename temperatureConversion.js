let temperature = prompt("Sisesta temperatuur");
let scale = prompt("Millisel skaalal on sisestatud temperatuur? C/F");

if (scale === "C") {
  console.log(celsiusToFahreinheit(temperature));
} else if (scale === "F") {
  console.log(fahrenheitToCelsius(temperature));
} else {
  console.log("Ei saa arvutada.");
}

function celsiusToFahreinheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
