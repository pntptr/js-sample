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

let post$ = fetch(JSONPLACEHOLDER + '/1')
    .then(resp => resp.json());

let comment$ = fetch(JSONPLACEHOLDER + '/1/comments')
    .then(resp => resp.json());
Promise.all([post$, comment$])
    .then( resp => {
        let post = resp[0];
        document.querySelector("#idPostTitle").innerHTML = post.title;
        document.querySelector("#idPostBody").innerHTML = post.body;
        let comments = resp[1];
        let ul = document.querySelector('#idResultList');
        comments.forEach(comment => {
            let li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = comment.body;
            ul.appendChild(li);
        });
    })
    .catch(error => {
        console.log(error);
    });
