// SEZIONE 17, LEZIONE 84 - CORSO UDEMY JS
// JAVASCRIPT LATO CLIENT: MANIPOLARE IL DOM
// querySelector, querySelectorAll

document.addEventListener('DOMContentLoaded', function(){
    var h1 = document.querySelector('#title'); // querySelector() returns only one element
    h1.style.color = "green";
});
