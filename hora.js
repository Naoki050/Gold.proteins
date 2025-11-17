function mostrarHora() {
  var ahora = new Date();
  var horas = ahora.getHours();
  var minutos = ahora.getMinutes();
  var segundos = ahora.getSeconds();

  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  document.getElementById("hora").innerHTML =
    "HORA: " + horas + ":" + minutos + ":" + segundos;
}

setInterval(mostrarHora, 1000);
