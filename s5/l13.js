// SEZIONE 5, LEZIONE 13 - CORSO UDEMY JS
// esadecimale ottale binario

// esadecimale
var hexNum = 0xF;
console.log(hexNum + 10);

// ottale
var octNum = 0o11;
console.log(octNum + 10);

// binario
var binNum = 0b101;
console.log(binNum);

// NaN - Not a Number
var res = hexNum * 'string';
console.log(res);

if ( !isNaN(res) ) {
    console.log('Il risultato è: ' + res);
} else {
    console.log('Attenzione: il risultato non è un numero!');
}

// verifica se NaN attraverso il metodo completo
console.log( Number.isNaN(res) );
