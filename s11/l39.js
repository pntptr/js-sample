// SEZIONE 11, LEZIONE 39 - CORSO UDEMY JS
// ciclo for
var maxLoop = 10;

for(var i = 0; i < maxLoop; i++){
    console.log(i);
}

// dichiarazione alternativa del ciclo for
var j = 0;

for(; j < maxLoop;){
    console.log(j++);
}

// parole chiave per i cicli
for(var k = 0; k < maxLoop; k++){
    if(k == 5) continue; // salta il valore 5 dalla numerazione
    if(k == 8) break;   // esce dal ciclo appena il valore è 8
    console.log(k);
}

console.log('End of program...');
