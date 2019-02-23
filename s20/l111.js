// SEZIONE 20, LEZIONE 111 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// template literals

// I WANT TO SHOW DATA FROM JSON OBJECT
let person = {
    name: 'Daniele',
    lastname: 'Toscanello'
};

// FIRST METHOD: NEWLINE AND + OPERATOR
let toPrint = "His name is " + person.name +
" and his lastname is " + person.lastname;

console.log(toPrint);

// SECOND METHOD: STRING CONCATENATE WITH += OPERATOR
let toPrintBackStick = `
here you can 
write whatever you
want!
`;

console.log(toPrintBackStick);

let fullName = `(Backtick version) His name is ${person.name} and his lastname is ${person.lastname}`;
console.log(fullName);
