function kontrolliVanust() {
  let vanus = prompt("Mis on teie vanus?")
  if (isNaN(vanus) || vanus < 0){
    alert("Sisesta vanus!")
    kontrolliVanust()
  }
  else {
    if (vanus < 7) {
      alert("See laps on veel liiga noor, et koolis käia.") //aga päriselus ei pruugi olla
  } else if (vanus < 17) {
      alert("Põhikooli õpilane sööb kell 10.")
  } else if (vanus < 21) {
      alert("Gümnaasiumi õpilane sööb kell 11.") 
  } else if (vanus > 20) {
      alert("Täiskasvanud õpilane sööb kell 12.") 
}
  }
}

kontrolliVanust()