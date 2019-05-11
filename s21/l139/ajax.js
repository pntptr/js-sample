// SEZIONE 21, LEZIONE 139 - CORSO UDEMY JS
// JAVASCRIPT ES6: PROMISE
// Javascript ES6: trasformare chiamate sincrone in Promise: Ajax

// In this lesson I used a standard AJAX request provides by XMLHttpRequest object
window.onload = function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/index.php');
    xhr.send();
    
    // if the response is OK (200)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let obj = JSON.parse(xhr.responseText);
            
            // STEP.1 - print on console the result to verify if it works
            console.log(obj);
            // STEP.2 - create an unordered items list to show result in HTML page
            let bookList = '<ul>';
            bookList += obj.map((book) => '<li>' + book.title + '</li>');
            bookList += '</ul>';
            document.querySelector('#container').innerHTML = bookList;
        }
    };

    // in case of error/errors
    xhr.error = function(){
        alert('Something wrong happens...');
    };
    
};
