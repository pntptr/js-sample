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
<<<<<<< HEAD

// CREATE A JSON OBJECT WITH NUMBER, STRING, NULL, OBJECT, ARRAY, TRUE AND FALSE
var newJson = '{"isMarried" : false, "husband" : null, "phone" : {"brand":"iPhone", "model":"6"}}';
console.log(JSON.parse(newJson));
var objJson = JSON.parse(newJson);
console.log(objJson.isMarried);
console.log(objJson.phone.brand);
=======
console.log(myJsonObj.surname);

var newJson = '';

// ...
>>>>>>> bc260f64624df045c1b8b1f74e1cefc9bb746e9a
