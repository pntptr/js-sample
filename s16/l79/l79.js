// SEZIONE 15, LEZIONE 79 - CORSO UDEMY JS
// OBJECT ORIENTED PROGRAMMING. OGGETTI E CLASSI IN JAVASCRIPT
// CHIAMATA AJAX AD UN SCRIPT PHP E VICEVERSA

// CREATE A NEW OBJECT TO MAKE A REQUEST
var xhr = new XMLHttpRequest();

// MAKE A GET REQUEST (ASYNC)
xhr.open('GET', "json.php", true);

// SEND THE DATA TO A SERVER
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        // if the state is ready (4) and the status is ok (200)
        var obj = JSON.parse(xhr.responseText);
        console.log('RESPONSE TEXT: ' + obj);

        var domResult = document.getElementById('idResult');
        
        // PUT THE RESULT IN HTML DOM OBJECT
        domResult.innerHTML = xhr.responseText;
    }
}
