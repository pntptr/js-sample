// SEZIONE 20, LEZIONE 116 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// Parametri di tipo rest

// DEFAULT ARGUMENTS REST PARAMETERS

function isGreater(prm1, prm2){
    // check if there is a value, else assign default value 0
    prm1 = prm1 || 0;
    prm2 = prm2 || 0;
    return prm1 > prm2;
}

console.log(isGreater());
console.log(isGreater(1, 2));
console.log(isGreater(2, 1));

// ES6 DEFAULT PARAMETERS
function isGreater(prm1 = 0, prm2 = 0){
    return prm1 > prm2;
}

console.log(isGreater());
console.log(isGreater(1, 2));
console.log(isGreater(2, 1));

// REST PARAMETERS
function calc(operation, ...p){
    return p.reduce( (x, y) => {
        return eval(x + operation + y);
    });
}

console.log( calc('+', 1, 2, 3, 4, 5) );
console.log( calc('*', 1, 2, 3, 4, 5) );
