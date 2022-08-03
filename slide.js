var counter = 1;
setInterval(function () {
  document.getElementById("slide" + counter).checked = true;
  counter++;
  if (counter > 4) {
    conter = 1;
  }
}, 5000);
