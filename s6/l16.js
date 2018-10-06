// SEZIONE 6, LEZIONE 16 - CORSO UDEMY JS
// null e undefined 

// null è di tipo object e non primitivo
console.log(typeof(null));

// window: oggetto implementato nel browser non in Node.js
// undefined è una variabile globale, nei browser posso richiamarla come window.undefined
var nome;
console.log(nome);
console.log(typeof(nome));

// null e undefined non sono dello stesso tipo
console.log(null == undefined); // true
console.log(null === undefined); // false

if(nome) console.log(nome); // la variabile è dichiarata ma non è definita (non ha valore)
if(cognome) console.log(cognome); // errore: la variabile non è stata nemmeno definita!
