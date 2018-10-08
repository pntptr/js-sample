// SEZIONE 8, LEZIONE 20 - CORSO UDEMY JS
// array - reference

var days = ['MONDAY','TUESDAY','WEDNESDAY','THUSDAY','FRIDAY','SATURDAY','SUNDAY'];
var daysCopy = days;
console.log(daysCopy);

// modifico il primo valore della variabile daysCopy
daysCopy[0] = 'LUNEDI';
console.log(days);
console.log(daysCopy);

// passaggio per valore su valori numerici
var numOne = 4;
var numTwo = numOne;
numTwo = 8;
console.log(numOne);
console.log(numTwo);
