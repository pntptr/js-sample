// SEZIONE 15, LEZIONE 72 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// New e this in in Javascript

// versione nativa (no ES6)

// CLASSIC JS FUNCTION
function Animal(){
    console.log('Animal');
    return 'I\'m a dog!';
}

function AnimalTwo(){
    this.type = 'Animal';
    this.habitat = 'Earth';
}

Animal();
console.log(typeof(Animal));

// KEYWORD NEW: CREATE A NEW OBJECT
var dog = new Animal();
console.log(dog);

// IN THIS CASE DOG GET A ANIMAL RETURNED VALUE
dog = Animal();
console.log(dog);

// MAKE AN INSTANCE OF ANIMALTWO
dog = new AnimalTwo();
console.log(dog.type);
console.log(dog.habitat);

// ANIMALTHREE: CONSTRUCTOR WITH A PARAMETER
function AnimalThree(name){
    this.name = name || 'no name';
}

var cat = new AnimalThree('Tom');
var mouse = new AnimalThree();

console.log(cat.name);
console.log(mouse.name);
