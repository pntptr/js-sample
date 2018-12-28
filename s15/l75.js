// SEZIONE 15, LEZIONE 75 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// SCOPE NELLE FUNZIONI, PAROLA CHIAVE THIS, AMBIENTE DI ESECUZIONE

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
    },

    // CREATE A METHOD WITH EXTERNAL DEFINITION (REFERENCES AN EXTERNAL FUNCTION)
    displayDogId : displayId 

}

// CREATE A FUNCTION THAT SHOWS AN OBJECT ID
function displayId(){
    console.log(this.id);
}

dog.displayDogId();
 