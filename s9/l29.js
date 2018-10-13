// SEZIONE 9, LEZIONE 29 - CORSO UDEMY JS
// null e undefined

var nome = 'Pietro';
console.log(nome == 'pietro');

// confronto con un numero, viene effettuato un cast da stringa a numero 
console.log(nome == 1);

console.log('' == 0);
console.log('' === 0);

// confronto con undefined
var numero;
console.log(numero);
console.log(numero == undefined); // true
console.log(numero === undefined); // true: stesso tipo
console.log(numero == null); // true: il valore non esiste
console.log(numero === null); // false
