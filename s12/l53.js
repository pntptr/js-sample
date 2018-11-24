// SEZIONE 12, LEZIONE 53 - CORSO UDEMY JS
// espressione di funzione: funzione invocata immediatamente
// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// normal function declaration
/*
function iife(){
    console.log('test of iife function');
}
*/

// function iife
(function iife(){
    console.log('test of iife function');
})(); // wrap function between brackets to transform in iife

// console.log(typeof iife);
