function kontrolliVanust() {
  let vanus = prompt("Mis on teie vanus?")
  if (isNaN(vanus) || vanus < 0){
    alert("Sisesta vanus!")
    return kontrolliVanust()
  } 
  else {
    let eagrupp
    if (vanus < 13) {
      eagrupp = "laps"
    } else if (vanus < 19) {
      eagrupp = "teismeline"
    } else {
      eagrupp = "täiskasvanu"
    }
    return eagrupp;
  }
}

function piletitüüp(eagrupp) {
  return eagrupp == "laps" || eagrupp == "teismeline" ? "Sooduspilet": "Täispilet";
}

function piletihind(pilet) {
  if (pilet == "Sooduspilet") {
    return 10
  } else {
    return 20
  }
}

function lemmikPuuvili() {
  let puuvili = prompt("Mis on teie lemmikpuuvili?")
  return puuvili
}

function onPopulaarnePuuvili(puuvili) {
  switch(puuvili) {
    case "õun":
      return true;
    case "pirn":
      return true;
    case "ploom":
      return;
    default: 
      return false
  }
}

eagrupp = kontrolliVanust()
pilet = piletitüüp(eagrupp)
hind = piletihind(pilet)
puuvili = lemmikPuuvili()
puuviliSuur = puuvili[0].toUpperCase() + puuvili.slice(1)
puuviliOnPopulaarne = onPopulaarnePuuvili(puuvili)

console.log("Oled " + eagrupp + ".");
console.log(puuviliSuur + (puuviliOnPopulaarne ? " on väga populaarne vili!" : " ei ole eriti populaarne."))
console.log(pilet + " on " + hind + " eurot.")