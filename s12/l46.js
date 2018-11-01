// SEZIONE 12, LEZIONE 46 - CORSO UDEMY JS
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

function calcolaIntelligente(){
    
    // ottengo l'operazione
    var operazione = arguments[0];
    var result = 0;
    
    // effettuo l'operazione sugil argomenti restanti
    for (var i = 1; i < arguments.length; i++) {
        switch(operazione){
            case 'somma': 
            {
                result += arguments[i];
                break;
            }
            case 'sottrazione': 
            {
                result -= arguments[i];
                break;
            }
            case 'moltiplicazione': 
            {
                result *= arguments[i];
                break;
            }
            case 'divisione': 
            {
                if(arguments[i] == 0) return false;
                result /= arguments[i];
                break;
            } 
        } // fine switch    
    }    
    
    return result;
}

// uso la funzione
console.log(calcola('somma', 1, 2));
console.log(calcola('sottrazione', 5, 3));
console.log(calcola('moltiplicazione', 5, 7));
console.log(calcola('divisione', 4, 2));

// lecito anche passare più parametri di quelli usati per il calcolo
console.log(calcola('somma', 1, 2, 3, 4, 5));

// uso della funzione calcolaIntelligente
console.log(calcolaIntelligente('somma', 1, 2, 3, 4, 5));
