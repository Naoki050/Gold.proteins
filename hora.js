function mostrarHora() {
  var ahora = new Date();
  var horas = ahora.getHours();
  var minutos = ahora.getMinutes();
  var segundos = ahora.getSeconds();

  // Si minutos o segundos son menores de 10, añadimos un 0 delante
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  // Mostramos la hora en el elemento con id="hora"
  document.getElementById("hora").innerHTML =
    "HORA: " + horas + ":" + minutos + ":" + segundos;
}

// Llamamos a la función cada segundo (1000 milisegundos)
setInterval(mostrarHora, 1000);