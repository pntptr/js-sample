// SEZIONE 20, LEZIONE 119 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// Metodi statici nelle classi di ES6

class Enemy
{
    constructor(type = 'Alien', lives = 12){
        this.type = type;
        this.lives = lives;
    }

    shout(){ return 'grrrrrrr' }

    static getType() { return 'Enemy' }
}

var en1 = new Enemy();
console.log(en1.type, en1.lives, en1.shout());

class Creeper extends Enemy
{
    constructor(type = 'Creeper', lives = 20){
        super(type, lives);
    }

    shout(){ return 'zzzzzzzz' }

    static getType() { return 'Creeper' + " extended from " + super.getType() }
}

var en2 = new Creeper();
console.log(en2.type, en2.lives, en2.shout());
console.log(Enemy.getType());
console.log(Creeper.getType());
