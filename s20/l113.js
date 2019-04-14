// SEZIONE 20, LEZIONE 113 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// Operatore spread e destrutturazione di array e oggetti

let a, b;

[a, b] = [1, 2];

console.log(a);
console.log(b);

// functions
function summ(arg1, arg2, arg3, arg4){
    return [].reduce.call(
        arguments,
        (a, b) => a + b
    );
}

console.log(summ(2,3));
console.log(summ(2,3,4));
console.log(summ(2,3,4,5));

// OPERATOR ... : DESTRUCTURING AN ARRAY INTO SINGLE ELEMENTS
let arr = [1, 2, 3, 4];

console.log(...arr);
console.log(summ(...arr));

// DESTRUCTURING AN OBJECT
let obj = {
    name:       "Daniele",
    lastName:   "Toscanello"
}

let { name : nomeDiPersona, lastName : cognomeDiPersona } = obj;

console.log(nomeDiPersona);
console.log(cognomeDiPersona);

