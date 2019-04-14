// SEZIONE 20, LEZIONE 115 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// Arrow functions and this

// ARROW AND THIS
var arr = [1,2,3,4,5,6,7,8,9];

// OLD WAY: USING FUNCTION 
var arrEven = arr.filter(
    function(ele){
        return ele % 2 == 0;
    }
);

console.log(arrEven);

// NEW WAY: USING ARROW FUNCTION
arrEven = arr.filter( ele => ele % 2 == 0);
console.log(arrEven);

var arrDouble = arrEven.map( ele => ele*2);
console.log(arrDouble);

var arrAdded = arrEven.reduce((a, b) => a+b);
console.log(arrAdded);

// ARROW FUNCTION PRESERVES THIS KEYWORD SCOPE
