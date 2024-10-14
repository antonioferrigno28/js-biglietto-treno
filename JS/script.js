/*NOSTRI DATI
     costo del biglietto è definito in base ai km (0.21 € al km)
     va applicato uno sconto del 20% per i minorenni
     va applicato uno sconto del 40% per gli over 65
     output in forma umana (due decimali dopo la virgola, come i normali prezzi di qualsiasi cosa)
    */

//RACCOLTA DATI
// chiedere all'utente il numero di chilometri che vuole percorrere e lo trasformo in numero
let userKm = parseInt(
  prompt("Inserisci il numero di chilometri che vuoi percorrere")
);
// chiedere all'utente l'età del passeggero
let userAge = parseInt(prompt("Inserisci l'eta del passeggero"));

//ELABORAZIONE

//dichiaro una variabile per il prezzo del biglietto
let ticketPrice = userKm * 0.21;

//Controllo se il valore sia un numero valido
if (isNaN(userKm) || isNaN(userAge)) {
  // stampo un messaggio di errore
  alert(
    "Inserisci un numero positivo o maggiore di zero sia per i km che per l'età"
  );
}

//SE il numero di km è maggiore di 0 AND l'età è compresa tra 18 e 65
if (userAge >= 18 && userAge <= 65) {
  // stampo il prezzo del biglietto
  console.log("Il prezzo del biglietto é " + ticketPrice.toFixed(2) + "€");
  // ALTRIMENTI SE il numero di km è minore di 0 o l'età è minore di 0
} else if (userKm <= 0 || userAge <= 0) {
  // stampo un messaggio di errore
  alert(
    "Inserisci un numero positivo o maggiore di zero sia per i km che per l'età"
  );
}
//SE l'età è minore di 18
else if (userAge < 18) {
  // applico al prezzo del biglietto uno sconto del 20%
  ticketPriceNew = ticketPrice - (ticketPrice * 20) / 100;
  // stampo il prezzo FINALE del biglietto
  console.log("Il prezzo finale è " + ticketPriceNew.toFixed(2) + "€");
}

//SE l'età è maggiore di 65
else if (userAge > 65) {
  // applico al prezzo del biglietto uno sconto del 40%
  ticketPriceNew = ticketPrice - (ticketPrice * 40) / 100;
  // stampo il prezzo FINALE del biglietto

  console.log("Il prezzo finale è " + ticketPriceNew.toFixed(2) + "€");
}
