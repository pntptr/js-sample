// SEZIONE 9, LEZIONE 23 - CORSO UDEMY JS
// operatori matematici

var x, y, z,
x = 10;
y = 20;
z = x + y;
console.log(z);

// somma diretta tra valori
z = 10 + 10;
console.log(z);

// somma tra tipi numerici diversi
y = 12.5;
z = x + y;
console.log(z); 

z = x * y;
console.log(z);

z = y / x;
console.log(z);

z = 100 % 20;
console.log(z);

z = 100 % 22;
console.log(z);

// operazioni particolari
z = 100/0;
console.log(z);
console.log(typeof(z));

z = 23 * "Test";
console.log(z);

z = 23 + "Test";
console.log(z);
z = parseInt(z);
console.log(z);
z = 23 + parseInt("Test");
console.log(z);
// in caso di operazioni numeriche è sempre meglio effettuare un
// parse per evitare errori o valori inaspettati
