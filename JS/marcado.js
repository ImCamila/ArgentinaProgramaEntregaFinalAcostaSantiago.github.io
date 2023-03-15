//Se crea una variable, la cual sera la ID de la seccion a modificar//
var ID = "LaID";

/*Se busca cada uno de los botones y se les indica que al hacer click cambien la ID por la que tienen 
programada, luego se ejecuta la funcion que realiza los cambios con la ID selecionada*/
document.getElementById('HistoriaBT').addEventListener('click', () => {ID = "Historia"; myFunction();});
document.getElementById('TrabajosBT').addEventListener('click', () => {ID = "Trabajos"; myFunction();});
document.getElementById('IdealesBT').addEventListener('click', () => {ID = "Ideales"; myFunction();});
document.getElementById('HabilidadesBT').addEventListener('click', () => {ID = "Habilidades"; myFunction();});
document.getElementById('ContactoBT').addEventListener('click', () => {ID = "Contacto"; myFunction();});
document.getElementById('FuturoBT').addEventListener('click', () => {ID = "Futuro"; myFunction();});

/*Esta funcion realiza tres acciones, scrollea hacia la seccion correspondiente, 
cambia lentamente el color de fondo del objeto selecionado y luego de un tiempo lo vuelve a dejar como estaba*/
function myFunction() {
  var access = document.getElementById(ID);
  access.scrollIntoView();
  document.getElementById(ID).style.transition = "all 1s";
  document.getElementById(ID).style.backgroundColor = '#ffff00';
  setTimeout(function(){document.getElementById(ID).style.backgroundColor = "transparent";}, 500);
}


