// SEZIONE 10, LEZIONE 34 - CORSO UDEMY JS
// istruzione IF
var condizione = true;

if (condizione) {
    console.log("La condizione è vera!");
} else {
    console.log("La condizione è falsa!");
}

// anche senza blocco di codice IF esegue la prima istruzione appena dopo se vero
if (condizione) console.log("La condizione è vera");

// attenzione che le altre verranno comunque eseguite
if (condizione)
    console.log("La condizione è vera!");
    console.log("La condizione è falsa!");

console.log("Fine!");
