/*document.getElementById('startButton').addEventListener('click', function() {
alert('¡El juego ha comenzado!');
  location.href ="./pantalladeljuego.html";
  // Aquí puedes agregar más lógica para iniciar el juego
});*/

/*document.addEventListener('DOMContentLoaded', function () {
  alert('¡El juego ha comenzado!');
  location.href ="./pantalladeljuego.html";
});*/

const miElemento = document.querySelector('#startButton'); 
if (miElemento !== null) {
    miElemento.addEventListener('click', function () {
      alert('¡El juego ha comenzado!');
      location.href ="./pantalladeljuego.html";
    });
}

const salida = document.querySelector('#exitButton'); 
if (salida !== null) {
  salida.addEventListener('click', function() {
  if (confirm('¿Estás seguro de que quieres salir?')) {
    location.href ="./iniciodesesion.html"; }
    });
  }

  const salida2 = document.querySelector('#startconfig'); 
if (salida2 !== null) {
  salida2.addEventListener('click', function() {
    location.href ="./menu_config.html";
  });
}
