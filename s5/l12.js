// SEZIONE 5, LEZIONE 12 - CORSO UDEMY JS
// operazioni con i numeri

var mioNumero = 42;
console.log(mioNumero + " => " + typeof mioNumero);

// problemi con i numeri float
var res = 0.1;
res += 0.2;
console.log(res); // 0.30000000000000004 !!!

// soluzione uno: dividere e moltiplicare per 10
res = (0.1 * 10 + 0.2 * 10) / 10;
console.log(res); // 0.3

// soluzione due: uso del metodo toFixed()
// il metodo toFixed() restituisce una string
res = 0.1 + 0.2;
console.log(res.toFixed(2)); // 0.30
