// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var pulsanteLancia = document.getElementById("lancia");
pulsanteLancia.addEventListener('click',
function() {

  var tuoTiro = Math.floor(Math.random()*6) + 1;
  console.log(tuoTiro);
  var npcTiro = Math.floor(Math.random()*6) + 1;
  console.log(npcTiro);
  var risultato = 'Hai perso! :()'

  if (tuoTiro > npcTiro) {
    risultato = 'Hai vinto! :)'
  }else if (tuoTiro == npcTiro) {
    risultato = 'Hai pareggiato! :/'
  }
  console.log(risultato);


}
);
