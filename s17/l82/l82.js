// SEZIONE 17, LEZIONE 82 - CORSO UDEMY JS
// JAVASCRIPT LATO CLIENT: MANIPOLARE IL DOM
// funzione getElementsByTagName

// adding an event listener when the page is loaded
document.addEventListener('DOMContentLoaded', function(colorChanged){ 
    // access directly to a background property of the body
    //document.body.style.backgroundColor = 'white';
    
    // getting dom element by getElementsByTagName function
    var e = document.getElementsByTagName('body');
    var a = ['a', 'a', 'a'];

    a.forEach(elem => {
        console.log(elem);
    });

    console.log(e);

    for(var i = 0; i < e.length; i++){
        e[i].style.color = 'green';
    }

    // tables
    var t = document.getElementsByTagName('tables');
    console.log(t);
    
});