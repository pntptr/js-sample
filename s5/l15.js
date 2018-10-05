// SEZIONE 5, LEZIONE 13 - CORSO UDEMY JS
// oggetto number

var num = new Number("2");
console.log(num);
console.log(typeof num);
console.log(num.valueOf());

// test per il valore nell'oggetto num
console.log(num == 2); // num vale 2 quindi è true
console.log(num === 2); // num è un oggetto quindi è diverso dal tipo primitivo quindi false

// casting
var eta = "32";
console.log(eta + " => " + typeof(eta));
eta = +eta;
console.log(eta + " => " + typeof(eta));
eta = parseInt(eta);
console.log(eta + " => " + typeof(eta));

// Javascript utilizza il wrapper Number per lavorare con i numeri
var wrapInt = (2).toString(); // wrap di un primitivo in un oggetto tipo Number
console.log(wrapInt);

wrapInt = (2).toFixed(2);
console.log(wrapInt);
