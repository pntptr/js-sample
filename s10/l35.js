// SEZIONE 10, LEZIONE 35 - CORSO UDEMY JS
// istruzione IF - ELSE

var voto;

voto = '6'; // espresso in decimi
voto = 32;
voto = -1;
voto = 'banana';

if(isNaN(voto)){
    console.log("Non hai inserito un numero!");
} else if(voto >= 6 && voto <= 10){
    console.log("Promosso");
} else if(voto >= 0 && voto <= 5){
    console.log("Bocciato!");
} else {
    console.log("Valore fuori dal range!");
}

console.log("Uscita!");
