// SEZIONE 10, LEZIONE 33 - CORSO UDEMY JS
// introduzione ai cicli in Javascript

var maxNum = 10;
var contatore = 1;

while(contatore <= maxNum){
    console.log(contatore);
    contatore++;
}

// ciclo di un array
var colors = ['red', 'green', 'blue', 'yellow'];
var numElem = colors.length;
contatore = 0;

while(contatore < numElem){
    console.log(colors[contatore]);
    contatore++;
}

// modo alternativo: effettuo il pop degli elementi => metodo distruttivo, ripulisce l'array
while(colors.length){
    console.log(colors.pop()); // estrae l'elemento in coda
}

console.log('Lunghezza array: ' + colors.length);
