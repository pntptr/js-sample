// SEZIONE 14, LEZIONE 62 - CORSO UDEMY JS
// METODI DELL'OGGETTO ARRAY IN JAVASCRIPT
// Il metodo join(): ritornare i valori di un array concatenati come stringa

// CREATE AN ARRAY
var days = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
];

var result;

// USE JOIN METHOD TO CREATE A STRING WITH ARRAY ELEMENT
result = days.join("; ");

// SHOW RESULTS
console.log(days);
console.log(result);
