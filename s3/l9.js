// SEZIONE 3, LEZIONE 9 - CORSO UDEMY JS
// tipizzazione debole di Javascript

var test;
console.log(test + ' => ' + typeof test);

test = 'Nome';
console.log(test + ' => ' + typeof test);

test = 42;
console.log(test + ' => ' + typeof test);

// array
test = [4, 5, 6];
console.log(test + ' => ' + typeof test);

// object
test = {};
console.log(test + ' => ' + typeof test);

// object initialized
person = {
    name : 'Alfa',
    lastname : 'Romeo',
    sayHello : () => {
        console.log('Hi all!');
    }
};

person.sayHello();
console.log(person.name + ' ' + person.lastname + ' => ' + typeof person);

