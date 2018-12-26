// SEZIONE 15, LEZIONE 73 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// Oggetto prototype; estendere oggetti usando il paradigma prototype

function Animal(name){
    this.name = name || 'unknown';
    this.type = 'generic animal';
    this.habitat = 'earth';
}

// ALL OBJECTS ARE FROM OBJECT
// PROTOTYPE: MODIFY A CLASS AFTER ITS DEFINITION
var dog = new Animal('Bobby');

Animal.prototype.displayName = function () {
    console.log(this.name);
}

// add a new property
Animal.prototype.numLegs = 4; 

dog.displayName();

var horse = new Animal('Goloso');

console.log('Num of dog legs: ' + dog.numLegs);
console.log('Num of horse legs: ' + horse.numLegs);

var spider = new Animal('Specchio');

// override numLegs property
spider.numLegs = 8; 
console.log('Num of spider legs: ' + spider.numLegs);
