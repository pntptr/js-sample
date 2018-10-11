// SEZIONE 9, LEZIONE 28 - CORSO UDEMY JS
// operatori matematici confronto

// operatori !=, ==, !==, ===
var num = 12;
var num2 = '12';

var test = num == num2; // cast implicito della stringa a numero
console.log(test);

test = num === num2;
console.log(test);

// altri confronti critici
var numero1 = 1;
var vero = true;
var falso = false;

test = numero1 == vero; // cast implicito del booleano da true a 1
console.log(test);
console.log(true * 5);

test = numero1 === vero;
console.log(test);

test = falso == 0;
console.log(test);
test = falso === 0;
console.log(test);

console.log(vero == falso);
console.log(vero != falso);

console.log(vero != 1);
console.log(vero !== 1);
