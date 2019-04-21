// SEZIONE 20, LEZIONE 117 - CORSO UDEMY JS
// ECMASCRIPT 2015/ES6. LE NUOVE FUNZIONALITA' DI JAVASCRIPT ES6
// Le classi in JavaScript ES6

// PRE ES6
// function Alien(){
//     this.type = "Alien";
//     this.weapons = [
//         'pistols',
//         'laserbeam'
//     ];
// }

// var alien = new Alien();
// console.log(alien.type);

// Alien.prototype.getWeapons = function() {
//     return this.weapons;
// }

// console.log(alien.getWeapons());

// ES6
class Alien{
    constructor(weapons){
        this.weapons = weapons || ['pistol'];
        this.health = 80;
    }
    getWeapons(){ return this.weapons; }
    increaseHealth(health){ this.health += health }
    getHealth(){ return this.health }
}

var alien = new Alien(['pistol', 'lasers']);
console.log(alien.getWeapons());
console.log(alien.getHealth());

Alien.prototype.addWeapon = function(weapon){ this.weapons.push(weapon); }

alien.addWeapon('laserbeam');
alien.increaseHealth(20);
console.log(alien.getWeapons());
console.log(alien.getHealth());
