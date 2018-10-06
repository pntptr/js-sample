// SEZIONE 7, LEZIONE 17 - CORSO UDEMY JS
// tipo boolean

var mioValore = false;
var secondoValore = true;
console.log(mioValore);
console.log(secondoValore);

// wrap di un valore booleano
var bool = Boolean(6 > 7);
console.log(bool);

var boolObj = new Boolean("Ciao");
console.log(boolObj);

// cast di un booleano
var toCast = 12;
toCast = !!toCast;
console.log("Valore di toCast: " + toCast + " tipo: " + typeof(toCast));

// i seguenti valori sono sempre false: 
// false, null, undefined, 0, NaN, stringa vuota ""
//
// mentre tutti gli altri sono sempre true
// persino new Boolean(false) perchè è un oggetto

var test = new Boolean(0);
console.log("Valore di test con 0: " + test);
test = new Boolean(1);
console.log("Valore di test con 1: " + test);
