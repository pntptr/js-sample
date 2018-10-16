// SEZIONE 12, LEZIONE 41 - CORSO UDEMY JS
// introduzione alle funzioni in Javascript

function test(){
    console.log('test() function');
    return 'I\'m the message!';
}

test(); // esegue la funzione
console.log(test()); // esegue la funzione interna poi quella esterna

var result = test();
console.log(result);
