// SEZIONE 17, LEZIONE 83 - CORSO UDEMY JS
// JAVASCRIPT LATO CLIENT: MANIPOLARE IL DOM
// getElementById and getElementByClassName

document.addEventListener('DOMContentLoaded', function() {
    // listener 
    var h1 = document.getElementById('title');
    h1.style.textTransform = 'uppercase';
    h1.style.color = 'green';
    h1.innerHTML = 'hello Daniele!';

    h1.onclick = () => {
        alert('You clicked me! Daniele is stupid!');
    }

    h1.addEventListener('mouseover', function () {
        h1.style.color = 'red';
    });
    
    h1.addEventListener('mouseleave', function () {
        h1.style.color = 'green';
    });
});