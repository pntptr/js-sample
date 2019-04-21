// SEZIONE 20, LEZIONE 118 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// Ereditarietà in ES6: estendere una classe

class Enemy
{
    constructor(type = 'Alien', lives = 12){
        this.type = type;
        this.lives = lives;
    }

    shout(){ return 'grrrrrrr' }
}

var en1 = new Enemy();
console.log(en1.type, en1.lives, en1.shout());

class Creeper extends Enemy
{
    constructor(type = 'Creeper', lives = 20){
        super(type, lives);
    }

    shout(){ return 'zzzzzzzz' }
}

var en2 = new Creeper();
console.log(en2.type, en2.lives, en2.shout());
