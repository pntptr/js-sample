// SEZIONE 14, LEZIONE 64 - CORSO UDEMY JS
// METODI DELL'OGGETTO ARRAY IN JAVASCRIPT
// Il metodo splice: rimuove elementi e ne aggiunge di nuovi da un array

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

var count = [
    'ONE',
    'TWO',
    'THREE',
    'FIVE'
]

var result;

// SPLICE METHOD: ADD AN ELEMENT INTO AN ARRAY IN SPECIFIED POSITION
console.log('Array before splice(): ' + count);
count.splice(3, 0, 'FOUR');
console.log('Array after splice(): ' + count);

// SPLICE METHOD: REMOVE AN ELEMENT FROM AN ARRAY
var removedItem = count.splice(3,1);
console.log('Removed element: ' + removedItem);
console.log('Array after removing element: ' + count);
