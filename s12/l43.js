// SEZIONE 12, LEZIONE 43 - CORSO UDEMY JS
// funzioni con argomenti

function hoursToSeconds(hours){
    // effetuo un cast di hours a numerico, se non va a buon fine restituisco lo 0
    var h = +hours || 0; 
    return h * 3600;
}

console.log(hoursToSeconds(24));
console.log(hoursToSeconds(2));
console.log(hoursToSeconds('2'));
console.log(hoursToSeconds(undefined));
