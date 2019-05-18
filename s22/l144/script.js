// SEZIONE 22, LEZIONE 144 - CORSO UDEMY JS
// JAVASCRIPT ES6: FETCH API
// Fetch API: Promise All: Processare la risposta con then e gli errori

/* 
    METHOD    
    Promise.all(iterable);
    DESC:
    This method returns a resolved promise when all promises in iterable are resolved, 
    otherwise it create a reject that contains the cause of first rejected promise

*/

const JSONPLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts';

// SOLUTION 1: execute single then() for each promise
//let post$ = fetch(JSONPLACEHOLDER + '/1')
    //.then(resp => resp.json());
//post$.then( post => console.log(post));
//
//let comment$ = fetch(JSONPLACEHOLDER + '/1/comments')
    //.then(resp => resp.json());
//comment$.then( comments => console.log(comments));

let post$ = fetch(JSONPLACEHOLDER + '/1')
    .then(resp => resp.json());

let comment$ = fetch(JSONPLACEHOLDER + '/1/comments')
    .then(resp => resp.json());
Promise.all([post$, comment$])
    .then( resp => {
        console.log(resp);
    });
