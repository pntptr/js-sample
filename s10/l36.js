// SEZIONE 10, LEZIONE 36 - CORSO UDEMY JS
// costrutto SWITCH

var valore;

valore = 5;

switch(valore){
    case 1:
        // primo caso
        console.log("UNO");
        break;
    
    case 2:
        // secondo caso
        console.log("DUE");
        break;
    
    case 3:
        // terso caso
        console.log("TRE");
        break;
    
    default:
        // caso di default
        console.log("DEFAULT");
}

// altro esempio
var paese = 'ITALIA';
var lingua = '';

switch(paese){
    case 'ITALIA':
        lingua = 'it';
    break;
    
    case 'CUBA':
    
    case 'SPAGNA':
        lingua = 'es';
    break;
    
    default:
        lingua = 'en';
}

console.log('In ' + paese + ' si parla in ' + lingua);
