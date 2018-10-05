// SEZIONE 4, LEZIONE 11 - CORSO UDEMY JS
// operazioni di concatenazione sulle stringhe

var verso1 = "Ahi quanto a dir qual era è cosa dura,\n";
var verso2 = "esta selva selvaggia e aspra e forte\n";
var verso3 = "che nel pensier rinova la paura!\n";

// concatenare le stringhe con la funzione dedicata
var paragrafo = verso1.concat(verso2, verso3);
console.log(paragrafo);

// concatenare le stringhe sfruttando l'overload dell'operatore +
var strofa = verso1 + verso2 + verso3;
console.log(strofa);

// cast con stringhe
var result = '10' + 1;
console.log(result);

result = (+'10') + 1; // cast da string -> int
console.log(result);

result = parseInt('10') + 1; // cast con metodo parseInt() string -> int
console.log(result);
