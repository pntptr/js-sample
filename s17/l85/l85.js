// SEZIONE 17, LEZIONE 85 - CORSO UDEMY JS
// JAVASCRIPT LATO CLIENT: MANIPOLARE IL DOM
// querySelectorAll

document.addEventListener('DOMContentLoaded', function(){
    var h1 = document.querySelector('#title'); // querySelector() returns only one element
    h1.style.color = "green";

    // usage of querySelectorAll()
    var p = document.querySelectorAll('p');
    p.forEach((target) => {
        target.style.color = "green";
    });
});
