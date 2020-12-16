// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var pulsanteLancia = document.getElementById("lancia");
pulsanteLancia.addEventListener('click',
function() {

  var tuoTiro = Math.floor(Math.random()*6) + 1;
  var npcTiro = Math.floor(Math.random()*6) + 1;
  var risultato = 'Hai perso! :('

  document.getElementById('fine').className = 'red';

  if (tuoTiro > npcTiro) {
    risultato = 'Hai vinto! :)'
    document.getElementById('fine').className = 'green';
  }else if (tuoTiro == npcTiro) {
    risultato = 'Hai pareggiato! :/'
    document.getElementById('fine').className = 'blue';
  }

  document.getElementById('tuoLancio').innerHTML = tuoTiro;
  document.getElementById('npcLancio').innerHTML = npcTiro;
  document.getElementById('fine').innerHTML = risultato;

  document.getElementById('risultati').className = 'show';






}
);
