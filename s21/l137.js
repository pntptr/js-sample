// SEZIONE 21, LEZIONE 137 - CORSO UDEMY JS
// JAVASCRIPT ES6: PROMISE
// Javascript ES6: introduzione alle Promise

/*
    Ci permettono di gestire i processi asincroni in modo più sincrono

    Rappresentano un valore che possiamo gestire nel futuro

    Il valore non può essere cambiato da altri handler perché Promise è immutabile

    Il valore è sempre disponibile anche se registriamo gli handler dopo che la Promise è stata risolta

*/

/* CREATE A PROMISE */
var p = new Promise(function(resolve, reject){
    var returnValue;
    var reasonValue;
    var condition = true;
    if(condition){
        resolve(returnValue);
    } else {
        reject(reasonValue);
    }
});
