// SEZIONE 12, LEZIONE 45 - CORSO UDEMY JS
// funzioni con argomenti multipli - parola chiave arguments

function calcola(){
    
    // visualizzo i parametri passati alla funzione mediante arguments (simile array)
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }    

    // ottengo i parametri della funzione
    var operazione = arguments[0];
    var a = arguments[1];
    var b = arguments[2];

    // calcolo il risultato
    switch(operazione){
        case 'somma': 
        {
            return a + b;
            break;
        }
        case 'sottrazione': 
        {
            return a - b;
            break;
        }
        case 'moltiplicazione': 
        {
            return a * b;
            break;
        }
        case 'divisione': 
        {
            return a / b;
            break;
        } 
    } // fine switch
}

// uso la funzione
console.log(calcola('somma', 1, 2));
console.log(calcola('sottrazione', 5, 3));
console.log(calcola('moltiplicazione', 5, 7));
console.log(calcola('divisione', 4, 2));

// lecito anche passare più parametri di quelli usati per il calcolo
console.log(calcola('somma', 1, 2, 3, 4, 5));
