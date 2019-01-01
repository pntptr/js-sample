// SEZIONE 15, LEZIONE 78 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// OGGETTO JSON

// JSON : JAVASCRIPT OBJECT NOTATION
// PARSING AN OBJECT TO JSON AND VICEVERSA
var obj = {
    name: 'Tiziana',
    surname: 'Panetta',
    role: 'Sorellazza'
}

console.log(JSON.stringify(obj));

// CREATES A STRING TO CONVERT INTO JSON OBJECT
var jsonString = '{"name" : "Tiziana","surname" : "Panetta","role" : "Sorellazza"}';
var myJsonObj = JSON.parse(jsonString);

console.log(myJsonObj);
