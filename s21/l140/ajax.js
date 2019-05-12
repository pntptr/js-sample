// SEZIONE 21, LEZIONE 140 - CORSO UDEMY JS
// JAVASCRIPT ES6: PROMISE
// Javascript ES6: Ajax con Promise

// Handle AJAX request with Promise
// Create an object to handle request
let $ = {
    get : (url) => {
        let p = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            
            // if the response is OK (200)
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(xhr.responseText);
                    } else {
                        reject('Error contacting server...');
                    }
                }
            };
            // in case of error/errors
            xhr.error = function(){
                reject('Error contacting server...');
            };
        }); // end promise

        return p;
    } // end of get method
}

window.onload = () => {
    $.get('http://localhost:8000/index.php').then((res) => {
        // if it is OK
        let obj = JSON.parse(res);
        console.log(obj);
    }).catch((err) => {console.log(err)});
};
