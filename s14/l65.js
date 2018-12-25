// SEZIONE 14, LEZIONE 65 - CORSO UDEMY JS
// METODI DELL'OGGETTO ARRAY IN JAVASCRIPT
// Il metodo indexOf: restituisce l'indice di un elemento all'interno di un array

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

// I WANT TO REMOVE SUNDAY ELEMENT FROM DAYS ARRAY
var targetIndex = days.indexOf('SUNDAY');
console.log('Index of my target: ' + targetIndex);

days.splice(targetIndex, 1);

console.log('Array after removing my target: ' + days);
