// SEZIONE 13, LEZIONE 54 - CORSO UDEMY JS
// METODI DELL'OGGETTO STRING - Introduzione

// funzioni di supporto per le stringhe

/*
    FUNCTIONS SUMMARY
    toUpperCase() - questo metodo trasforma tutto in maiuscolo
    toLowerCase() - trasforma la stringa in minuscolo
    substring(start, end) - estrae una sottostringa 
    substr(start, lenght) - estrae una sottostringa
    charAt(pos) - restituisce il carattere nella posizione specificata
    indexOf(substr) - restituisce l'indice del carattere specificato alla prima occorrenza
    slice(start, end) - restituisce la sottostringa esclusa la fine
    trim() - elimina gli spazi vuoti
    replace(stringa o regex, value o function)
    search(string o regex) - 
*/

var nome = "DaNiele";
var cognome = "      Toscano        ";

console.log( nome );
console.log( nome.toLowerCase() );
console.log( nome.toUpperCase() );
console.log( nome.substring(0, 3) );
console.log( nome.substr(3,2) );

console.log( "Il cognome è: " + cognome + "!" );
console.log( "Il cognome è: " + cognome.trim() + "!" );

console.log( nome.replace('e', 'i') );
