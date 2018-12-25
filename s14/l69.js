// SEZIONE 14, LEZIONE 69 - CORSO UDEMY JS
// METODI DELL'OGGETTO ARRAY IN JAVASCRIPT
// Il metodo reduce(): 

var numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

// REMOVE THE LAST ELEMENTS FOR TESTING
// numbers.splice(4);

// REDUCE METHOS: RETURNS A VALUE FROM A CALLBACK
var sum = numbers.reduce(
    (prevValue, nextValue) => prevValue + nextValue
);

console.log('Sum: ' + sum);
