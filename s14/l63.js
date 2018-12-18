// SEZIONE 14, LEZIONE 63 - CORSO UDEMY JS
// METODI DELL'OGGETTO ARRAY IN JAVASCRIPT
// I metodi push e unshift: aggiungere un elemento all'inizio e fine di un array

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

// CREATE A COPY OF THE ARRAY
var copyArray = days.slice();

// ADD AN ELEMENT AT THE END
copyArray.push("PLUNDAY");
console.log(copyArray);

// ADD AN ELEMENT AT THE START
copyArray.unshift("FIRSTDAY");
console.log(copyArray);
