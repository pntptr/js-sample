// SEZIONE 15, LEZIONE 74 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// OBJECT LITERAL

// DEFINE A LITERAL OBJECT
var dog = {
    type : 'DOG',
    numLegs : 4,
    name : 'Goofye',

    bark : function(){
        console.log('WOOF!');
    },

    getName : function(){
        console.log(this.name);
    },

    favoriteFriends : [],

    id : {
        idNumber : 123456,
        address : 'Via G. La Pira, Persico Dosimo',
        country : 'ITALY'
    }
}

dog.bark();

// ADD AN ELEMENT TO A LITERAL
dog.color = 'WHITE';

console.log(dog.color);

console.log(dog.favoriteFriends);
dog.favoriteFriends.push('MICKEY');
console.log(dog.favoriteFriends);

// SHOW DOG ID FIELD
console.log(dog.id);
console.log(dog.id.address);
