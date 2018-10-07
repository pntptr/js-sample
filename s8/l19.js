// SEZIONE 8, LEZIONE 19 - CORSO UDEMY JS
// array - literals

var days = [];
days = [7];
console.log(days);

// prestare attenzione all'override dei metodi in Javascript
// dichiarare un array con il costruttore Array()
//var giorni = new Array();
function Array(){
    return false;
}

// costruisco un oggetto con il metodo Array appena ridefinito
var giorni = new Array();
console.log(giorni.length);
console.log(days.length);
