// SEZIONE 21, LEZIONE 138 - CORSO UDEMY JS
// JAVASCRIPT ES6: PROMISE
// Javascript ES6: Promise: resolve, reject, then e catch

// By using object 
let p = new Promise((resolve, reject) => {
    // OK
    resolve('Promise risolta!');
    
    // BAD
    // reject('Si è verificato un errore!');
    // throw new Error('Si è verificato un errore!');
    // return new Error('Si è verificato un errore!');
});

p.then((res) => {
    console.log(res);
}).catch((err) => {
    // in case of reject, error or exception
    console.log(err);
});
