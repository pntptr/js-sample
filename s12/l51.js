// SEZIONE 12, LEZIONE 51 - CORSO UDEMY JS
// passaggio di funzione ad un altra funzione

// funzione di output di un oggetto
function outputObject(obj){
    for(var i in obj){
        console.log(i + ' => ' + obj[i]);
    } 
}

// funzione di elaborazione di un oggetto: passo l'oggetto ed un metodo da eseguire su di esso
function processObject(myObj, callback){
    callback(myObj);

    // creo una funzione anonima per l'oggetto callback
    callback.testFunction = function() {
        console.log('Called testFunction()');
    }
}

// creo l'oggetto
var persona = {name:'Severus', age:'50', genre:'M'};

// processo l'oggetto appena creato
processObject(persona, outputObject);

// l'oggetto callback si chiama outputObject(), quindi posso usare la funzione testFunction() 
outputObject.testFunction();
