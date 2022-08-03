function calculate() {
  var height = document.getElementById("height").value / 100;
  var weight = document.getElementById("weight").value;

  var imc = weight / height ** 2;
  var text = "";
  if (imc < 16) {
    text = "Magreza grau III";
  } else if (imc < 16.9) {
    text = "Magreza grau II";
  } else if (imc < 18.4) {
    text = "Magreza grau I";
  } else if (imc < 24.9) {
    text = "Eutrofia (peso adequado)";
  } else if (imc < 29.9) {
    text = "Sobrepeso";
  } else if (imc < 34.9) {
    text = "Obesidade grau I";
  } else if (imc < 39.9) {
    text = "Obesidade grau II";
  } else if (imc > 40.0) {
    text = "Obesidade grau III ";
  }
  document.getElementById("text_area").innerText = text;
}
