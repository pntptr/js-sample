// SEZIONE 12, LEZIONE 47 - CORSO UDEMY JS
// scope delle variabili

// scope globale
var myVar = 'Primo';

function testVar(){
    var myVar = 'Seconda';
    console.log(myVar);
}

testVar();
console.log(myVar);
