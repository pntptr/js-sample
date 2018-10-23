// SEZIONE 12, LEZIONE 44 - CORSO UDEMY JS
// funzioni con argomenti multipli

function sommaStupida(a, b){
    return a + b;
}

function sottrazioneStupida(a, b){
    return a - b;
}

console.log(sommaStupida(1,2));

// attenzione a controllare sempre il tipo dei parametri
console.log(sommaStupida('Ciao ', 'tutti!'));
console.log(sottrazioneStupida('Ciao ', 'tutti!'));

// funzione calcola generica
function calcola(operazione, a, b){
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
} // fine funzione

console.log(calcola('moltiplicazione', 2, 3));
