// SEZIONE 12, LEZIONE 49 - CORSO UDEMY JS
// closure in Javascript

// scope globale
var myVar = 'Primo';

function testVar(){
    var myVar = 'Seconda';
    console.log(myVar);

    // creo una funzione annidata
    function innerFunc(){
        console.log("Sono la funzione interna!");
    }

    return innerFunc;
}

var myFunc = testVar();

console.log(myFunc);

myFunc();
