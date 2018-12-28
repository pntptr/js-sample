// SEZIONE 15, LEZIONE 76 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// OGGETTO MATH

// MATH OBJECT, IT PROVIDES MATHEMATIC FUNCTIONS
var numbers = [
    1,2,3,4,5,6,7,8,9
]

console.log(Math.min(numbers));
console.log(Math.max(numbers));

var negNum = -3;
console.log(Math.abs(negNum));

// RANDOM NUMBER
console.log(Math.random());
console.log(Math.round(Math.random() * 10)); // TRUNCATE TO INT. NUMBER
console.log(Math.ceil(Math.random() * 10)); // APPROX TO UPPER INT. NUMBER
console.log(Math.floor(Math.random() * 10)); // APPROX TO LOWER INT. NUMBER

// POWER AND SQUARE ROOT
console.log(Math.sqrt(16));
console.log(Math.pow(2, 4));

// EULER NUMBER
console.log(Math.exp(1));

// TRIGONOMETRY
console.log(Math.sin(Math.PI));
console.log(Math.cos(Math.PI));
