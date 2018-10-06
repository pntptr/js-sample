// SEZIONE 8, LEZIONE 18 - CORSO UDEMY JS
// array - dichiarazione con costruttore new Array()

var giorni = new Array();
console.log(giorni);
giorni = new Array(7);
console.log(giorni);

// Javascript effettua un fill delle posizioni rimanenti con undefined: l'array cresce!
giorni[10] = "Test";
console.log(giorni);
