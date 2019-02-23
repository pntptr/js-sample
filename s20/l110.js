// SEZIONE 20, LEZIONE 110 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// let: dichiarare le variabili in ES6 con scope di blocco

var variabile = 2;

function showResult(){
    var variabile = 3;
}

console.log('Value of variabile: ' + variabile);

// VARIABLES HAVE GLOBAL SCOPE: IT'S A PROBLEM IF YOU WANT TO HIDE THEIR VALUES AND RE-USE THEM
for(var i=0; i<3; i++){
    console.log('Value of i (for statement scope): ' + i);
}
console.log('Value of i (outside for statement): ' + i);

// LET: DECLARE A VARIABLE WITH BLOCK SCOPE
for(let j=0; j<3; j++){
    console.log('Value of j (for statement scope): ' + j);
}
//console.log('Value of j (outside for statement): ' + j);

{
    let name = 'Toscanello';
    var lastName = 'Daniele';
    console.log('Name: ' + name + ' Surname: ' + lastName);
}
console.log('Name: ' + name + ' Surname: ' + lastName);
