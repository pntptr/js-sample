// SEZIONE 18, LEZIONE 93 - CORSO UDEMY JS
// GLI EVENTI IN JAVASCRIPT
// useCapture e propagazione degli eventi  

// execute callback when the DOM is loaded
document.addEventListener('DOMContentLoaded', function(){
    // ENSURE THE DOM IS READY
    var doc = document;
    var f = doc.querySelector('#form');

    // EVENT HANDLING COULD BE FROM INSIDE TO OUTSIDE OR VICEVERSA (BUBBLE OR CAPTURE)
    function handleContainer(e){
        console.dir(e);
        alert('container = ' + e.target.id);
    }

    function handleName(e){
        console.dir(e);
        alert('name = ' + e.target.name)
    }

    var container = doc.querySelector('#container');
    container.addEventListener('click', handleContainer, true); // true for useCapture

    var name = doc.querySelector('#name');
    name.addEventListener('click', handleName, true);

});
