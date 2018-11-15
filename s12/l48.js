// SEZIONE 12, LEZIONE 48 - CORSO UDEMY JS
// funzioni annidate in Javascript

// scope globale
var myVar = 'Primo';

function testVar(){
    var myVar = 'Seconda';
    console.log(myVar);

    // creo una funzione annidata
    function innerFunc(){
        console.log("Sono la funzione interna!: " + myVar);
    }

    innerFunc();
}

testVar();
