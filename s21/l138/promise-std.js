// SEZIONE 21, LEZIONE 138 - CORSO UDEMY JS
// JAVASCRIPT ES6: PROMISE
// Javascript ES6: Promise: resolve, reject, then e catch

/*
    Promise state: 
    - Pending
    - Fullfilled (resolve) 
    - Rejected (reject)
*/

let p = Promise.resolve('Promise risolta');

p.then((res) => {
    console.log(res);
});

let r = Promise.reject('Promise rifiutata');

r.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('Error: ' + err);
});
