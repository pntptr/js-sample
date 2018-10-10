// SEZIONE 9, LEZIONE 27 - CORSO UDEMY JS
// operatori matematici confronto

var test;
console.log(test + ' => ' + typeof(test));

test = 3 < 5;
console.log(test + ' => ' + typeof(test));

test = 5 <= 5;
console.log(test + ' => ' + typeof(test));

test = 5 == 5;
console.log(test + ' => ' + typeof(test));

var x = 5, y = 7;

// attenzione agli assegnamenti nei test condizionali
// se diverso da 0 il test logico è considerato true
if( test = 8 ) console.log('test è uguale a 8!');

// in caso di confronto con valori numerici, meglio avere a sinistra il numero
// per evitare gli errori
// if ( 5 = x ) avrebbe generato errore e ce ne saremmo accorti subito
if (5 == x) console.log('x è uguale a 5!');
