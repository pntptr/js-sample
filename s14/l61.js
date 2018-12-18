// SEZIONE 14, LEZIONE 61 - CORSO UDEMY JS
// METODI DELL'OGGETTO ARRAY IN JAVASCRIPT
// Il metodo slice(): prelevare una fetta di una stringa

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

// CONVERT THE ARRAY INTO A STRING
result = days.toString();

// SHOW THE RESULT
console.log(result);

// SLICE METHOD: RETURNS A SLICE OF AN ARRAY
var arraySliced = days.slice(0,2);

console.log(arraySliced.toString());

// SLICE METHOD TO RETURN A COPY OF AN ARRAY
var copyOfArray = days.slice();
copyOfArray[7] = 'PLUTONDAY';
console.log(copyOfArray.toString());
