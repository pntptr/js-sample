// SEZIONE 17, LEZIONE 86 - CORSO UDEMY JS
// JAVASCRIPT LATO CLIENT: MANIPOLARE IL DOM
// parentNode and firstChild

document.addEventListener('DOMContentLoaded', function(){
    var h1 = document.querySelector('#title'); // querySelector() returns only one element
    h1.style.color = "green";

    // usage of querySelectorAll()
    var p = document.querySelectorAll('p');
    p.forEach((target) => {
        target.style.color = "purple";
    });
});
