// SEZIONE 9, LEZIONE 30 - CORSO UDEMY JS
// operatore logico AND (&&)

var test = 1 && 2; // se il primo valore è true, l'operatore AND restituisce ciò che viene dopo
console.log(test);

test = 1 && 0; // passa il valore 0
if(test){ // l'if considera il valore 0 come false
    console.log("VERO");
} else {
    console.log("FALSO");
}

// altro caso particolare
test = 0 && 2;
console.log(test);
