// SEZIONE 15, LEZIONE 71 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// Introduzione agli oggetti Javascript

/*
    In JavaScript, tutto quello che non è un tipo primitivo è un oggetto
    Gli oggetti sono dei contenitori di valori eterogenei
    Possono contenere qualsiasi tipo di valore, sia primitivi che oggetti e funzioni
*/

var Person = {
    name    : 'Nome',
    age     : 33,
    single  : false
}

console.log(Person);

// ACCESS TO OBJECT PROPERTY (WITH DOT .)
console.log(Person.age);

// ACCESS TO OBJECT PROPERTY (WITH SQUARE BRACKETS [])
console.log(Person['name']);
